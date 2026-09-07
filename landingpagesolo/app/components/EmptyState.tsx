export default function EmptyState({ message = "No Records" }: { message?: string }) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">✕</div>
      <p>{message}</p>
    </div>
  );
}