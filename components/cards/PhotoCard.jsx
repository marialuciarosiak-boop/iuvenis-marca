import React from 'react';
export function PhotoCard({ src, alt = '', label, sublabel, height = 228, fade = true, style }) {
  return (
    <div style={{ position: 'relative', borderRadius: 'var(--radius-xs)', overflow: 'hidden', height, border: '1px solid var(--border-photo)', background: 'var(--ocean-300)', flexShrink: 0, ...style }}>
      {src ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> : null}
      {fade ? <div style={{ position: 'absolute', inset: 0, background: 'var(--fade-photo)' }}></div> : null}
      {label ? <div style={{ position: 'absolute', left: 0, right: 0, bottom: 18, textAlign: 'center', color: '#fff' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, letterSpacing: '0.04em', lineHeight: 1.1 }}>{label}</div>
        {sublabel ? <div style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 4 }}>{sublabel}</div> : null}
      </div> : null}
    </div>
  );
}
