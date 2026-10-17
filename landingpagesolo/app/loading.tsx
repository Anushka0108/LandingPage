
export default function Loading() {
  return (
    <main className="explore-loading">
      <div className="explore-loading-content">
        <div className="explore-loading-logo">SOLO</div>

        <div
          className="explore-loading-spinner"
          role="status"
          aria-label="Loading"
        />

        <h1>
          Loading your next
          <span> opportunity...</span>
        </h1>

        <p>
          We’re gathering the best opportunities tailored
          to your skills and interests.
        </p>
      </div>
    </main>
  );
}
