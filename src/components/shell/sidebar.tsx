"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  GridIcon,
  LinkIcon,
  SettingsIcon,
  ZapIcon,
  LogOutIcon,
} from "@/components/icons";

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  badge?: string;
};

const NAV: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: GridIcon },
  { href: "/links", label: "Links", icon: LinkIcon },
  { href: "/settings", label: "Settings", icon: SettingsIcon },
];

export type SidebarUser = {
  name: string;
  email: string;
  image: string | null;
};

export function Sidebar({
  user,
  quota,
  linkCount,
  signOutAction,
}: {
  user: SidebarUser;
  quota: { used: number; limit: number };
  linkCount: number;
  signOutAction: () => Promise<void>;
}) {
  const pathname = usePathname();
  const quotaPercent = Math.round((quota.used / quota.limit) * 100);

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-line bg-card lg:flex">
      {/* โลโก้ */}
      <div className="flex h-16 items-center gap-2.5 px-5">
        <span className="flex size-8 items-center justify-center rounded-lg bg-brand text-white">
          <LinkIcon className="size-[18px]" />
        </span>
        <span className="text-[17px] font-bold tracking-tight">Linkpulse</span>
        <span className="ml-auto rounded-full bg-brand-tint px-2 py-0.5 text-[10px] font-bold tracking-wide text-brand">
          PRO
        </span>
      </div>

      {/* ปุ่มหลัก */}
      <div className="px-3 pb-2">
        <Link
          href="/links/new"
          className="flex items-center gap-2.5 rounded-xl bg-brand px-3.5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
        >
          <ZapIcon className="size-4" />
          Shorten URL
          <kbd className="ml-auto rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-medium">
            ⌘K
          </kbd>
        </Link>
      </div>

      {/* เมนู */}
      <nav className="flex flex-col gap-1 px-3 py-2">
        {NAV.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-brand-tint text-brand"
                  : "text-muted hover:bg-surface hover:text-ink"
              }`}
            >
              <Icon className="size-[18px]" />
              {item.label}
              {item.href === "/links" && (
                <span className="ml-auto rounded-full bg-surface px-2 py-0.5 text-[11px] font-semibold text-muted">
                  {linkCount}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* โควตา */}
      <div className="mt-auto px-3 pb-3">
        <div className="rounded-xl bg-brand-tint p-3.5">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-ink">Click quota</span>
            <span className="text-brand">{quotaPercent}%</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white">
            <div
              className="h-full rounded-full bg-brand"
              style={{ width: `${quotaPercent}%` }}
            />
          </div>
          <p className="mt-2 text-[11px] leading-snug text-muted">
            {quota.used.toLocaleString()} / {quota.limit.toLocaleString()} clicks
            used this month
          </p>
        </div>
      </div>

      {/* ผู้ใช้ */}
      <div className="flex items-center gap-3 border-t border-line px-4 py-3.5">
        {user.image ? (
          <Image
            src={user.image}
            alt=""
            width={32}
            height={32}
            className="size-8 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs font-bold text-brand">
            {user.name.charAt(0).toUpperCase()}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold leading-tight">
            {user.name}
          </p>
          <p className="truncate text-[11px] text-muted">{user.email}</p>
        </div>
        <form action={signOutAction}>
          <button
            type="submit"
            title="ออกจากระบบ"
            aria-label="ออกจากระบบ"
            className="flex size-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-ink"
          >
            <LogOutIcon className="size-4" />
          </button>
        </form>
      </div>
    </aside>
  );
}
