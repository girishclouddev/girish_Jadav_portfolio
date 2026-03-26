/**
 * GJ monogram logo — used in Navbar, Footer, and as favicon source.
 * size: controls width/height in px (default 32)
 * showText: renders "Girish." wordmark beside the icon
 */
export default function Logo({ size = 32, showText = false, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {/* Icon mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Girish Jadav logo"
      >
        <defs>
          <linearGradient id="gj-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="gj-shine" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Background rounded square */}
        <rect width="40" height="40" rx="10" fill="url(#gj-grad)" />

        {/* Shine overlay */}
        <rect width="40" height="20" rx="10" fill="url(#gj-shine)" />
        <rect y="20" width="40" height="20" rx="0" fill="url(#gj-shine)" />

        {/* "G" letterform — left half */}
        <path
          d="M9 20C9 13.9 13.9 9 20 9C23.3 9 26.2 10.4 28.2 12.6L25.1 15.1C23.8 13.8 22 13 20 13C16.1 13 13 16.1 13 20C13 23.9 16.1 27 20 27C22.2 27 24.2 26 25.5 24.5H21V21H29.5V22C29.5 26.7 25.2 31 20 31C13.9 31 9 26.1 9 20Z"
          fill="white"
          fillOpacity="0.95"
        />

        {/* Code bracket accent — bottom-right */}
        <path
          d="M30 26L33 29L30 32"
          stroke="white"
          strokeOpacity="0.5"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {showText && (
        <span className="font-bold text-white text-lg leading-none">
          Girish<span className="text-primary-400">.</span>
        </span>
      )}
    </span>
  )
}
