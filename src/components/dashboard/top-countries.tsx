import type { TopCountry } from "@/lib/dashboard-data";
import { GlobeIcon } from "@/components/icons";

export function TopCountries({ countries }: { countries: TopCountry[] }) {
  return (
    <section className="flex h-full flex-col rounded-2xl border border-line bg-card p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-bold">Top countries</h2>
          <p className="mt-1 text-sm text-muted">
            การกระจายตัวของผู้เข้าชมตามประเทศ
          </p>
        </div>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand">
          <GlobeIcon className="size-4" />
        </span>
      </div>

      <ul className="mt-5 flex flex-col gap-4">
        {countries.map((c) => (
          <li key={c.code}>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-6 shrink-0 text-[11px] font-bold text-muted">
                {c.code}
              </span>
              <span className="truncate font-medium">{c.name}</span>
              <span className="ml-auto shrink-0 font-semibold">
                {c.percent}%
              </span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface">
              <div
                className="h-full rounded-full bg-brand"
                style={{ width: `${c.percent}%` }}
              />
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-auto border-t border-line pt-3 text-xs text-muted">
        {/* Week 6: จะเปลี่ยนเป็นแผนที่โลกจริง + ข้อมูลจาก geo lookup */}
        ข้อมูลประเทศมาจาก IP geolocation ตอน redirect
      </p>
    </section>
  );
}
