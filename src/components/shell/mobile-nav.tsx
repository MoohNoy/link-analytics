"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GridIcon, LinkIcon, SettingsIcon } from "@/components/icons";

const NAV = [
  { href: "/dashboard", label: "Dashboard", icon: GridIcon },
  { href: "/links", label: "Links", icon: LinkIcon },
  { href: "/settings", label: "Settings", icon: SettingsIcon },
];

/** แถบเมนูล่างสำหรับจอเล็ก (sidebar ถูกซ่อนไว้ต่ำกว่า lg) */
export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 flex border-t border-line bg-card lg:hidden">
      {NAV.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors ${
              active ? "text-brand" : "text-muted"
            }`}
          >
            <Icon className="size-5" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
