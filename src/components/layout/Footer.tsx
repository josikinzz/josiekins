export function Footer() {
  return (
    <footer
      className="w-full py-8 relative"
      style={{
        backgroundImage: 'url(/images/shared/background.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#111',
      }}
    >
      <div className="absolute inset-0 bg-black/85" />
      {/* Top fade to black */}
      <div
        className="absolute inset-x-0 top-0 h-[10%] z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        }}
      />
      <div className="relative z-10 max-w-page mx-auto px-page text-white/60 text-sm text-center">
        {/* Minimal footer matching original site */}
      </div>
    </footer>
  )
}
