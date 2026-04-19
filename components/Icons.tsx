import React from "react";

type IconProps = {
  className?: string;
  strokeWidth?: number;
};

const base = (className = "h-6 w-6", sw = 1.5) => ({
  className,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
});

export const ShieldIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const NetworkIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <circle cx="12" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
    <path d="M12 7v4M7 17l4-4M17 17l-4-4" />
  </svg>
);

export const WifiIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <path d="M5 12.5a10 10 0 0 1 14 0" />
    <path d="M8.5 16a5 5 0 0 1 7 0" />
    <circle cx="12" cy="19" r="1" />
    <path d="M2 9a14 14 0 0 1 20 0" />
  </svg>
);

export const UsersIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20a6 6 0 0 1 12 0" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M15 20a5 5 0 0 1 6-4.5" />
  </svg>
);

export const FishingIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <path d="M4 5h10l3 3v3" />
    <path d="M17 11h4" />
    <path d="M4 5v8a4 4 0 0 0 4 4h4" />
    <circle cx="19" cy="11" r="1.5" />
    <path d="m12 17 2 2" />
  </svg>
);

export const DocumentIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <path d="M6 3h9l4 4v14H6z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h7M9 17h7M9 9h2" />
  </svg>
);

export const ArrowRightIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const CheckIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <path d="m5 12 5 5L20 7" />
  </svg>
);

export const MenuIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <path d="M4 7h16M4 17h16" />
  </svg>
);

export const CloseIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const PlusIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const MinusIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <path d="M5 12h14" />
  </svg>
);

export const CompassIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15 9-2 4-4 2 2-4 4-2Z" />
  </svg>
);

export const MessageIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <path d="M4 6h16v10H8l-4 4V6Z" />
  </svg>
);

export const ClipboardIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <rect x="6" y="5" width="12" height="16" rx="2" />
    <path d="M9 5V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
    <path d="M9 12h6M9 16h4" />
  </svg>
);

export const MailIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const PhoneIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <path d="M5 4h3l2 5-2 1a10 10 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const MapPinIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const StarIcon = ({ className, strokeWidth }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m12 2 2.9 6.3 6.8.7-5 4.7 1.4 6.8L12 17l-6.1 3.5 1.4-6.8-5-4.7 6.8-.7L12 2Z" />
  </svg>
);

export const LockIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    <circle cx="12" cy="16" r="1" />
  </svg>
);
