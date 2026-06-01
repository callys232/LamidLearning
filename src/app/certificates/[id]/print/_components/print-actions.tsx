"use client";

export function PrintActions() {
  return (
    <div className="no-print fixed right-6 top-6 flex gap-3 z-10">
      <button
        type="button"
        onClick={() => window.print()}
        className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-primary-sm hover:bg-primary-hover transition-all"
      >
        Download PDF
      </button>
      <button
        type="button"
        onClick={() => window.history.back()}
        className="rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text-secondary hover:bg-surface-hover transition-all"
      >
        Back
      </button>
    </div>
  );
}
