import { redirect } from "next/navigation";
import { auth, signOut } from "../../../auth";
import { Sidebar } from "@/components/shell/sidebar";
import { Topbar } from "@/components/shell/topbar";
import { MobileNav } from "@/components/shell/mobile-nav";
import { getDashboardData } from "@/lib/dashboard-data";

/**
 * Layout ของทุกหน้าที่ต้องล็อกอิน (dashboard, links, settings)
 * ชื่อโฟลเดอร์เป็น (app) ซึ่งเป็น route group — ไม่ไปโผล่ใน URL
 * เช่น src/app/(app)/dashboard/page.tsx ยังเข้าที่ /dashboard เหมือนเดิม
 */
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  async function handleSignOut() {
    "use server";
    await signOut({ redirectTo: "/login" });
  }

  const { quota, activeLinks } = await getDashboardData();

  const user = {
    name: session.user.name ?? "ผู้ใช้",
    email: session.user.email ?? "",
    image: session.user.image ?? null,
  };

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar
        user={user}
        quota={quota}
        linkCount={activeLinks}
        signOutAction={handleSignOut}
      />

      <div className="flex min-h-screen flex-col lg:pl-64">
        <Topbar userImage={user.image} userName={user.name} />
        <main className="flex-1 px-4 pb-24 pt-6 sm:px-6 lg:pb-10">
          {children}
        </main>
      </div>

      <MobileNav />
    </div>
  );
}
