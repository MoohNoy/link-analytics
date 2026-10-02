/**
 * ชุดไอคอน SVG แบบ inline — ไม่ต้องลง dependency เพิ่ม
 * ทุกตัวใช้ currentColor จึงเปลี่ยนสีด้วย text-* ของ Tailwind ได้เลย
 */
type IconProps = React.SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </Base>
  );
}

export function LinkIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 0 1 0 10h-2" />
      <path d="M8 12h8" />
    </Base>
  );
}

export function SettingsIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M20 7h-9" />
      <path d="M14 17H5" />
      <circle cx="17" cy="17" r="3" />
      <circle cx="7" cy="7" r="3" />
    </Base>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </Base>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </Base>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m6 9 6 6 6-6" />
    </Base>
  );
}

export function BellIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 9a6 6 0 0 1 12 0c0 6 2.5 8 2.5 8h-17S6 15 6 9Z" />
      <path d="M10.3 21a2 2 0 0 0 3.4 0" />
    </Base>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 5v14M5 12h14" />
    </Base>
  );
}

export function ZapIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </Base>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
    </Base>
  );
}

export function TrendingUpIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </Base>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z" />
    </Base>
  );
}

export function CursorClickIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 3.5 10 20l2.2-6.4L19 11.5 4 3.5Z" />
    </Base>
  );
}

export function LiveIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="2" />
      <path d="M7.8 16.2a6 6 0 0 1 0-8.4" />
      <path d="M16.2 7.8a6 6 0 0 1 0 8.4" />
      <path d="M4.9 19.1a10 10 0 0 1 0-14.2" />
      <path d="M19.1 4.9a10 10 0 0 1 0 14.2" />
    </Base>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Base>
  );
}

export function LogOutIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="m16 17 5-5-5-5" />
      <path d="M21 12H9" />
    </Base>
  );
}
