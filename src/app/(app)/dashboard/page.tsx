import type { Metadata } from "next";
import Link from "next/link";
import { getDashboardData, percentChange } from "@/lib/dashboard-data";
import { StatCard } from "@/components/dashboard/stat-card";
import { ClicksChart } from "@/components/dashboard/clicks-chart";
import { TopLinks } from "@/components/dashboard/top-links";
import { TopCountries } from "@/components/dashboard/top-countries";
import {
  CursorClickIcon,
  LinkIcon,
  LiveIcon,
  PlusIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Dashboard — Linkpulse",
};

const RANGES = ["7 days", "30 days", "All time"] as const;

export default async function DashboardPage() {
  const data = await getDashboardData();
  const change = percentChange(data.totalClicks, data.previousTotalClicks);

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-5">
      {/* หัวข้อหน้า */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Dashboard Overview
          </h1>
          <p className="mt-1 text-sm text-muted">
            ภาพรวมยอดคลิก ลิงก์ที่ทำงานอยู่ และที่มาของผู้เข้าชม
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex rounded-xl border border-line bg-card p-1">
            {RANGES.map((range) => (
              <button
                key={range}
                type="button"
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                  range === "30 days"
                    ? "bg-brand text-white"
                    : "text-muted hover:text-ink"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
          <Link
            href="/links/new"
            className="flex h-9 items-center gap-1.5 rounded-xl bg-brand px-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
          >
            <PlusIcon className="size-4" />
            New link
          </Link>
        </div>
      </div>

      {/* การ์ดสถิติ */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          label="Total clicks"
          value={data.totalClicks.toLocaleString()}
          icon={<CursorClickIcon className="size-[18px]" />}
          badge={{
            text: `${change >= 0 ? "+" : ""}${change.toFixed(1)}%`,
            tone: change >= 0 ? "positive" : "neutral",
          }}
          footerLeft="เทียบกับ 30 วันก่อนหน้า"
          footerRight={`${data.previousTotalClicks.toLocaleString()} clicks`}
        />

        <StatCard
          label="Active links"
          value={data.activeLinks.toLocaleString()}
          icon={<LinkIcon className="size-[18px]" />}
          badge={{ text: `+${data.newLinksThisMonth} this month`, tone: "neutral" }}
          footerLeft="ลิงก์ที่เปิดใช้งานอยู่"
          footerRight={<span className="text-positive">100% active</span>}
        />

        <StatCard
          label="Clicks today"
          value={data.clicksToday.toLocaleString()}
          icon={<LiveIcon className="size-[18px]" />}
          live
          footerLeft="อัปเดตแบบเรียลไทม์"
          footerRight={`Peak: ${data.peakPerHour} / hr`}
        />
      </div>

      {/* กราฟ */}
      <ClicksChart data={data.daily} />

      {/* สองคอลัมน์ล่าง */}
      <div className="grid gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <TopLinks links={data.topLinks} />
        </div>
        <div className="lg:col-span-2">
          <TopCountries countries={data.topCountries} />
        </div>
      </div>
    </div>
  );
}
