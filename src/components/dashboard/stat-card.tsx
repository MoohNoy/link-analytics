export function StatCard({
  label,
  value,
  icon,
  badge,
  footerLeft,
  footerRight,
  live,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  badge?: { text: string; tone: "positive" | "neutral" };
  footerLeft: string;
  footerRight?: React.ReactNode;
  live?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-line bg-card p-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-muted">{label}</p>
          {live && (
            <span className="flex items-center gap-1 rounded-full bg-positive-soft px-2 py-0.5 text-[10px] font-bold text-positive">
              <span className="size-1.5 rounded-full bg-positive" />
              Live
            </span>
          )}
        </div>
        <span className="flex size-9 items-center justify-center rounded-xl bg-brand-tint text-brand">
          {icon}
        </span>
      </div>

      <div className="mt-3 flex items-end gap-3">
        <p className="text-[34px] font-bold leading-none tracking-tight">
          {value}
        </p>
        {badge && (
          <span
            className={`mb-1 rounded-full px-2 py-1 text-xs font-semibold ${
              badge.tone === "positive"
                ? "bg-positive-soft text-positive"
                : "bg-brand-tint text-brand"
            }`}
          >
            {badge.text}
          </span>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-xs">
        <span className="text-muted">{footerLeft}</span>
        {footerRight && <span className="font-medium">{footerRight}</span>}
      </div>
    </div>
  );
}
