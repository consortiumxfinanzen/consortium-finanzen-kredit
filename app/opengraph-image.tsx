import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a1f3d 0%, #1e3a5f 50%, #0a1f3d 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Gold accent bar top */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: '#d4af37' }} />

        {/* Brand name */}
        <div style={{ color: '#d4af37', fontSize: 18, letterSpacing: 8, marginBottom: 28, textTransform: 'uppercase', display: 'flex' }}>
          CONSORTIUM FINANZEN KREDIT
        </div>

        {/* Main headline */}
        <div style={{ color: 'white', fontSize: 50, fontWeight: 800, textAlign: 'center', lineHeight: 1.15, maxWidth: 900, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          Ihr unabhängiger Kreditvermittler in Europa
        </div>

        {/* Services row */}
        <div style={{ color: '#94a3b8', fontSize: 20, marginTop: 32, display: 'flex', gap: 20, alignItems: 'center' }}>
          <span>Immobilienfinanzierung</span>
          <span style={{ color: '#d4af37' }}>·</span>
          <span>KMU-Kredite</span>
          <span style={{ color: '#d4af37' }}>·</span>
          <span>Privatkredite</span>
        </div>

        {/* Location badge */}
        <div style={{ marginTop: 44, background: '#d4af37', color: '#0a1f3d', padding: '14px 40px', borderRadius: 8, fontSize: 18, fontWeight: 700, display: 'flex' }}>
          Frankfurt · Deutschland · Europa
        </div>

        {/* Gold accent bar bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 6, background: '#d4af37' }} />
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
