import { NextRequest, NextResponse } from "next/server";
import { githubTechnologyMap } from "@/app/data/technologymap";

type GitHubRepository = {
  name: string;
  languages_url: string;
  fork: boolean;
};

function extractUsername(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname !== "github.com") {
      return null;
    }

    const parts = parsedUrl.pathname
      .split("/")
      .filter(Boolean);

    if (parts.length !== 1) {
      return null;
    }

    return parts[0];
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const githubUrl = body.githubUrl;

    if (!githubUrl) {
      return NextResponse.json(
        {
          error: "GitHub URL is required.",
        },
        {
          status: 400,
        }
      );
    }

    const username = extractUsername(githubUrl);

    if (!username) {
      return NextResponse.json(
        {
          error: "Please enter a valid GitHub profile URL.",
        },
        {
          status: 400,
        }
      );
    }

    const headers = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2026-03-10",
    };

    const repositoriesResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        headers,
        cache: "no-store",
      }
    );

    if (!repositoriesResponse.ok) {
      if (repositoriesResponse.status === 404) {
        return NextResponse.json(
          {
            error: "GitHub user not found.",
          },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json(
        {
          error: "Unable to access GitHub.",
        },
        {
          status: repositoriesResponse.status,
        }
      );
    }

    const repositories =
      (await repositoriesResponse.json()) as GitHubRepository[];

    const publicRepositories = repositories.filter(
      (repository) => !repository.fork
    );

    const languageTotals: Record<string, number> = {};

    for (const repository of publicRepositories) {
      try {
        const languageResponse = await fetch(
          repository.languages_url,
          {
            headers,
            cache: "no-store",
          }
        );

        if (!languageResponse.ok) {
          continue;
        }

        const languages =
          (await languageResponse.json()) as Record<
            string,
            number
          >;

        for (const [language, bytes] of Object.entries(
          languages
        )) {
          languageTotals[language] =
            (languageTotals[language] || 0) + bytes;
        }
      } catch {
        continue;
      }
    }

    const sortedLanguages = Object.entries(languageTotals)
    .sort(([, a], [, b]) => b - a)
    .map(([language]) => language);

    const detectedSkills = new Set<string>();

    for (const language of sortedLanguages) {
    const mappedSkills = githubTechnologyMap[language] || [];

    for (const skill of mappedSkills) {
        detectedSkills.add(skill);
    }
    }

    return NextResponse.json({
    username,
    repositoriesAnalyzed: publicRepositories.length,
    languages: sortedLanguages,
    skills: Array.from(detectedSkills),
    });
  } catch {
    return NextResponse.json(
      {
        error: "Something went wrong while analyzing GitHub.",
      },
      {
        status: 500,
      }
    );
  }
}