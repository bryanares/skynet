export default function SkynetLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const heights: Record<string, number> = { sm: 28, md: 36, lg: 48 }
  const h = heights[size]

  return (
    <svg
      width={h * 3.2}
      height={h}
      viewBox="0 0 144 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SKYNET logo"
      role="img"
    >
      {/* WiFi arc above the S */}
      {/* Outer arc */}
      <path
        d="M 6 16 A 10 10 0 0 1 26 16"
        stroke="#F97316"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Middle arc */}
      <path
        d="M 9 19 A 7 7 0 0 1 23 19"
        stroke="#F97316"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Inner arc */}
      <path
        d="M 12 22 A 4 4 0 0 1 20 22"
        stroke="#F97316"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Dot */}
      <circle cx="16" cy="26" r="2" fill="#F97316" />

      {/* SKYNET text */}
      <text
        x="34"
        y="30"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="white"
        letterSpacing="-0.5"
      >
        SKYNET
      </text>
    </svg>
  )
}
