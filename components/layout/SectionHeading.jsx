import React from 'react';
/** title: plain part; emphasis: highlighted part on its own line (unless inline). */
export function SectionHeading({ title, emphasis, subtitle, variant = 'sans', tone = 'light', inline = false, align = 'center', style }) {
  const dark = tone === 'dark';
  const serif = variant === 'serif';
  const app = variant === 'app';
  const base = serif ? { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 44, lineHeight: 1.1 }
    : app ? { fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 40, lineHeight: 1.05, letterSpacing: '-0.03em' }
    : { fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 28, lineHeight: 1.25 };
  const color = dark ? '#fff' : app ? 'var(--navy-800)' : 'var(--petrol-900)';
  const em = serif ? { fontStyle: 'italic', color: 'var(--gold-500)' } : app ? { color: 'var(--azure-500)' } : { fontWeight: 700 };
  return (
    <div style={{ textAlign: align, display: 'flex', flexDirection: 'column', alignItems: align === 'center' ? 'center' : 'flex-start', gap: 14, ...style }}>
      <h2 style={{ margin: 0, color, textWrap: 'balance', ...base }}>
        {title}{emphasis ? (inline ? <> <span style={em}>{emphasis}</span></> : <><br /><span style={em}>{emphasis}</span></>) : null}
      </h2>
      {subtitle ? <p style={{ margin: 0, maxWidth: 560, fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)', textWrap: 'pretty' }}>{subtitle}</p> : null}
    </div>
  );
}
