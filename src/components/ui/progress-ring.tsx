import { cn } from "@/lib/utils";

interface ProgressRingProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  showLabel?: boolean;
  label?: string;
  className?: string;
}

export function ProgressRing({
  value,
  size = 48,
  strokeWidth = 4,
  color = "stroke-primary",
  trackColor = "stroke-border",
  showLabel = true,
  label,
  className,
}: ProgressRingProps) {
  const clamped        = Math.min(100, Math.max(0, isNaN(value) ? 0 : value));
  const accessibleLabel = label ?? `${Math.round(clamped)}% complete`;
  const radius          = (size - strokeWidth) / 2;
  const circumference   = radius * 2 * Math.PI;
  const offset          = circumference - (clamped / 100) * circumference;

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(clamped)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={accessibleLabel}
      title={accessibleLabel}
      className={cn("relative inline-flex items-center justify-center", className)}
    >
      {/* SVG attributes (width/height) are presentation attributes, not CSS */}
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className={trackColor}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={cn(color, "transition-[stroke-dashoffset] duration-700")}
        />
      </svg>
      {showLabel && (
        <span className="absolute text-xs font-semibold text-text-primary tabular-nums">
          {Math.round(clamped)}%
        </span>
      )}
    </div>
  );
}
