/**
 * ข้อมูลสำหรับหน้า Dashboard
 *
 * ตอนนี้ยังเป็น mock data เพราะในฐานข้อมูลยังไม่มี Link/Click จริง
 * พอทำ Week 3-5 (สร้างลิงก์ + redirect + เก็บ click) เสร็จแล้ว
 * ให้แก้แค่ฟังก์ชัน getDashboardData() ด้านล่างให้ query Prisma แทน
 * ส่วน component ทั้งหมดไม่ต้องแก้ เพราะยึดตาม type นี้อยู่แล้ว
 */

export type DailyClicks = {
  /** label ที่จะโชว์ใต้แท่งกราฟ เช่น "Oct 12" */
  label: string;
  clicks: number;
};

export type TopLink = {
  slug: string;
  destination: string;
  clicks: number;
};

export type TopCountry = {
  /** ISO code 2 ตัว เช่น "TH" */
  code: string;
  name: string;
  percent: number;
};

export type DashboardData = {
  totalClicks: number;
  previousTotalClicks: number;
  activeLinks: number;
  newLinksThisMonth: number;
  clicksToday: number;
  peakPerHour: number;
  daily: DailyClicks[];
  topLinks: TopLink[];
  topCountries: TopCountry[];
  quota: { used: number; limit: number };
};

/** % การเปลี่ยนแปลงเทียบช่วงก่อนหน้า */
export function percentChange(current: number, previous: number): number {
  if (previous === 0) return current === 0 ? 0 : 100;
  return ((current - previous) / previous) * 100;
}

export async function getDashboardData(): Promise<DashboardData> {
  // TODO (Week 5): เปลี่ยนมา query จริงด้วย Prisma เช่น
  //
  //   const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
  //   const totalClicks = await prisma.click.count({
  //     where: { link: { userId }, createdAt: { gte: since } },
  //   })
  //   const daily = await prisma.$queryRaw`
  //     SELECT date_trunc('day', "createdAt") AS day, COUNT(*)::int AS clicks
  //     FROM "Click" ... GROUP BY day ORDER BY day
  //   `
  //
  return {
    totalClicks: 1284,
    previousTotalClicks: 1142,
    activeLinks: 12,
    newLinksThisMonth: 2,
    clicksToday: 86,
    peakPerHour: 14,
    daily: [
      { label: "Oct 12", clicks: 62 },
      { label: "Oct 13", clicks: 81 },
      { label: "Oct 14", clicks: 54 },
      { label: "Oct 15", clicks: 103 },
      { label: "Oct 16", clicks: 128 },
      { label: "Oct 17", clicks: 88 },
      { label: "Oct 18", clicks: 112 },
      { label: "Oct 19", clicks: 141 },
      { label: "Oct 20", clicks: 118 },
      { label: "Oct 21", clicks: 184 },
      { label: "Oct 22", clicks: 152 },
      { label: "Oct 23", clicks: 109 },
      { label: "Oct 24", clicks: 134 },
      { label: "Today", clicks: 176 },
    ],
    topLinks: [
      {
        slug: "sale26",
        destination: "https://store.linkpulse.com/summer-sale",
        clicks: 524,
      },
      {
        slug: "dev-api3",
        destination: "https://docs.linkpulse.io/v3/core-redirect",
        clicks: 389,
      },
      {
        slug: "ph-launch",
        destination: "https://producthunt.com/posts/linkpulse",
        clicks: 246,
      },
      {
        slug: "news-oct",
        destination: "https://newsletter.company.co/issues/48",
        clicks: 125,
      },
    ],
    topCountries: [
      { code: "US", name: "United States", percent: 42 },
      { code: "TH", name: "Thailand", percent: 26 },
      { code: "GB", name: "United Kingdom", percent: 18 },
      { code: "JP", name: "Japan", percent: 9 },
      { code: "CA", name: "Canada", percent: 5 },
    ],
    quota: { used: 14240, limit: 50000 },
  };
}
