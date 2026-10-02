import Link from "next/link";
import Image from "next/image";
import {
  SearchIcon,
  CalendarIcon,
  ChevronDownIcon,
  BellIcon,
  PlusIcon,
} from "@/components/icons";

export function Topbar({
  userImage,
  userName,
}: {
  userImage: string | null;
  userName: string;
}) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-line bg-card px-4 sm:px-6">
      {/* ช่องค้นหา */}
      <div className="relative hidden max-w-md flex-1 sm:block">
        <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
        <input
          type="search"
          placeholder="Search links, campaigns, tags..."
          className="h-10 w-full rounded-xl bg-surface pl-10 pr-4 text-sm text-ink outline-none transition-shadow placeholder:text-muted focus:ring-2 focus:ring-brand/30"
        />
      </div>

      {/* ตัวเลือกช่วงเวลา */}
      <button
        type="button"
        className="hidden h-10 items-center gap-2 rounded-xl border border-line px-3.5 text-sm font-medium text-ink transition-colors hover:bg-surface md:flex"
      >
        <CalendarIcon className="size-4 text-muted" />
        Last 30 days
        <ChevronDownIcon className="size-4 text-muted" />
      </button>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          aria-label="การแจ้งเตือน"
          className="relative flex size-10 items-center justify-center rounded-xl text-muted transition-colors hover:bg-surface hover:text-ink"
        >
          <BellIcon className="size-5" />
          <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-negative ring-2 ring-card" />
        </button>

        <Link
          href="/links/new"
          className="flex h-10 items-center gap-1.5 rounded-xl bg-brand px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
        >
          <PlusIcon className="size-4" />
          <span className="hidden sm:inline">Create Link</span>
        </Link>

        {userImage ? (
          <Image
            src={userImage}
            alt=""
            width={36}
            height={36}
            className="size-9 rounded-full object-cover"
          />
        ) : (
          <span className="flex size-9 items-center justify-center rounded-full bg-brand-soft text-xs font-bold text-brand">
            {userName.charAt(0).toUpperCase()}
          </span>
        )}
      </div>
    </header>
  );
}
