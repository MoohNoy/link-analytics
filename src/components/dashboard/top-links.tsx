import Link from "next/link";
import type { TopLink } from "@/lib/dashboard-data";
import { LinkIcon, ArrowRightIcon, CopyIcon } from "@/components/icons";

export function TopLinks({ links }: { links: TopLink[] }) {
  return (
    <section className="flex h-full flex-col rounded-2xl border border-line bg-card p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-bold">Top links</h2>
          <p className="mt-1 text-sm text-muted">
            ลิงก์ที่มียอดคลิกสูงสุดในช่วงนี้
          </p>
        </div>
        <Link
          href="/links"
          className="flex shrink-0 items-center gap-1 text-sm font-semibold text-brand hover:underline"
        >
          View all
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>

      {links.length === 0 ? (
        <EmptyState />
      ) : (
        <ul className="mt-4 flex flex-col divide-y divide-line">
          {links.map((link) => (
            <li
              key={link.slug}
              className="flex items-center gap-3 py-3.5 first:pt-0"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand">
                <LinkIcon className="size-4" />
              </span>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">
                  linkpulse.io/{link.slug}
                </p>
                <p className="truncate text-xs text-muted">
                  {link.destination}
                </p>
              </div>

              <p className="shrink-0 text-sm font-bold">
                {link.clicks.toLocaleString()}
                <span className="ml-1 text-xs font-normal text-muted">
                  clicks
                </span>
              </p>

              <button
                type="button"
                aria-label={`คัดลอกลิงก์ ${link.slug}`}
                className="flex size-8 shrink-0 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-ink"
              >
                <CopyIcon className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function EmptyState() {
  return (
    <div className="mt-6 flex flex-col items-center rounded-xl border border-dashed border-line py-10 text-center">
      <span className="flex size-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
        <LinkIcon className="size-5" />
      </span>
      <p className="mt-3 text-sm font-semibold">ยังไม่มีลิงก์</p>
      <p className="mt-1 text-xs text-muted">
        สร้างลิงก์แรกเพื่อเริ่มเก็บสถิติการคลิก
      </p>
      <Link
        href="/links/new"
        className="mt-4 rounded-lg bg-brand px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        สร้างลิงก์
      </Link>
    </div>
  );
}
