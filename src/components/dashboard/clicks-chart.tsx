import type { DailyClicks } from "@/lib/dashboard-data";

/**
 * กราฟแท่ง "Clicks over time" เขียนด้วย CSS ล้วน ไม่ต้องลง chart library
 * - แท่งที่สูงสุด (peak) กับแท่งสุดท้าย (วันนี้) จะเป็นสีเข้ม
 * - hover แล้วมี tooltip โชว์ตัวเลข
 */
export function ClicksChart({ data }: { data: DailyClicks[] }) {
  const max = Math.max(...data.map((d) => d.clicks), 1);
  const peakIndex = data.findIndex((d) => d.clicks === max);

  return (
    <section className="rounded-2xl border border-line bg-card p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-bold">Clicks over time</h2>
          <p className="mt-1 text-sm text-muted">
            ยอดคลิกรายวันย้อนหลัง {data.length} วัน
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium">
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-sm bg-brand" />
            Peak / Today
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-sm bg-brand-soft" />
            Redirects
          </span>
        </div>
      </div>

      <div className="mt-6 flex h-56 items-end gap-1.5 sm:gap-2">
        {data.map((d, i) => {
          const highlight = i === peakIndex || i === data.length - 1;
          const heightPercent = Math.max((d.clicks / max) * 100, 4);
          return (
            <div
              key={d.label}
              className="group relative flex h-full flex-1 flex-col justify-end"
            >
              {/* tooltip */}
              <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-ink px-2 py-1 text-[11px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                {d.clicks}
              </span>
              <div
                style={{ height: `${heightPercent}%` }}
                title={`${d.label}: ${d.clicks} clicks`}
                className={`w-full rounded-t-md transition-colors ${
                  highlight
                    ? "bg-brand"
                    : "bg-brand-soft group-hover:bg-brand/60"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* แกน X */}
      <div className="mt-3 flex gap-1.5 border-t border-line pt-2 sm:gap-2">
        {data.map((d, i) => (
          <span
            key={d.label}
            className={`flex-1 truncate text-center text-[10px] sm:text-[11px] ${
              i === peakIndex || i === data.length - 1
                ? "font-semibold text-brand"
                : "text-muted"
            }`}
          >
            {d.label}
          </span>
        ))}
      </div>
    </section>
  );
}
