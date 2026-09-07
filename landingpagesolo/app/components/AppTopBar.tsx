import Image from "next/image";
import Link from "next/link";
import UserMenu from "./UserMenu";

export default function AppTopBar({
  userName = "Guest User",
  userRole = "Learner",
}: {
  userName?: string;
  userRole?: string;
}) {
  return (
    <div className="app-topbar">
      <Link href="/" className="logo">
        <Image src="/images/solologo.png" alt="SOLO logo" width={110} height={50} priority />
      </Link>

      <UserMenu userName={userName} userRole={userRole} avatarSrc="/images/profilepic.png" />
    </div>
  );
}