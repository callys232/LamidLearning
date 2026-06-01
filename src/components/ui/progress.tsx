import { cn } from "@/lib/utils";

interface ProgressProps {
  value:         number;
  label?:        string;
  className?:    string;
  barClassName?: string;
  showLabel?:    boolean;
  size?:         "xs" | "sm" | "md";
  animated?:     boolean;
}

const trackSizes = { xs: "h-1", sm: "h-1.5", md: "h-2" };

export function Progress({
  value,
  label,
  className,
  barClassName,
  showLabel,
  size = "sm",
  animated = true,
}: ProgressProps) {
  const clamped        = Math.min(100, Math.max(0, isNaN(value) ? 0 : value));
  const rounded        = Math.round(clamped);
  const accessibleName = label ?? `${rounded}%`;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        role="progressbar"
        aria-valuenow={rounded}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={accessibleName}
        title={accessibleName}
        className={cn(
          "relative flex-1 rounded-full bg-surface-active overflow-hidden",
          trackSizes[size],
        )}
      >
        {/* Width set via CSS custom property to avoid inline style */}
        <div
          className={cn(
            "absolute left-0 top-0 h-full rounded-full [width:var(--progress-w)]",
            animated ? "transition-all duration-700 ease-out-expo" : "",
            clamped === 100 ? "bg-emerald-500" : "bg-primary",
            barClassName,
          )}
          // eslint-disable-next-line react/forbid-component-props -- CSS custom property required for dynamic value; cannot be expressed as a static Tailwind class
          style={{ "--progress-w": `${clamped}%` } as React.CSSProperties}
        />
      </div>
      {showLabel && (
        <span className="shrink-0 text-xs text-text-muted tabular-nums w-8 text-right">
          {rounded}%
        </span>
      )}
    </div>
  );
}
