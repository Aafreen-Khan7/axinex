type IconName = 'arrow_forward' | 'bolt' | 'group' | 'hub' | 'security' | 'terminal'

export default function InlineIcon({
  name,
  className = '',
}: {
  name: IconName
  className?: string
}) {
  const shared = 'fill-none stroke-current stroke-[1.8]'

  switch (name) {
    case 'terminal':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3.5" y="5" width="17" height="14" rx="2" className={shared} />
          <path d="M7 10.5 9.5 12 7 13.5" className={shared} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.5 13.5h4.5" className={shared} strokeLinecap="round" />
        </svg>
      )
    case 'group':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="9" cy="9" r="3" className={shared} />
          <path d="M4.8 18c.8-2.6 2.9-4 4.2-4s3.4 1.4 4.2 4" className={shared} strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="17.25" cy="10.25" r="2.2" className={shared} />
          <path d="M14.8 18c.5-1.8 1.8-2.8 2.4-2.8s1.9 1 2.4 2.8" className={shared} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'security':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3.5 18 6v5.2c0 3.7-2.4 6.9-6 8.3-3.6-1.4-6-4.6-6-8.3V6l6-2.5Z" className={shared} strokeLinejoin="round" />
          <path d="M12 8v6" className={shared} strokeLinecap="round" />
          <path d="M12 14.7h.01" className={shared} strokeLinecap="round" />
        </svg>
      )
    case 'bolt':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path d="m13 2-7 10h4l-1 10 7-10h-4l1-10Z" className={shared} strokeLinejoin="round" />
        </svg>
      )
    case 'hub':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="2.2" className={shared} />
          <circle cx="5.5" cy="8" r="1.6" className={shared} />
          <circle cx="18.5" cy="8" r="1.6" className={shared} />
          <circle cx="5.5" cy="16" r="1.6" className={shared} />
          <circle cx="18.5" cy="16" r="1.6" className={shared} />
          <path d="M10.1 11 7 9.1M13.9 11 17 9.1M10.1 13 7 14.9M13.9 13 17 14.9" className={shared} strokeLinecap="round" />
        </svg>
      )
    case 'arrow_forward':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h13" className={shared} strokeLinecap="round" />
          <path d="m12 6 6 6-6 6" className={shared} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    default:
      return null
  }
}