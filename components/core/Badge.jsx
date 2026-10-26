import React from 'react';
export function Badge({ children, tone = 'light', icon, style }) {
  const t = { light: { background: '#fff', color: 'var(--navy-950)', boxShadow: 'var(--shadow-pill)' },
    gold: { background: 'rgba(180,138,74,0.14)', color: 'var(--gold-500)' },
    ocean: { background: 'var(--ocean-600)', color: '#fff' },
    dark: { background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid var(--border-on-dark)' } }[tone];
  return <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, padding: '6px 12px', borderRadius: 'var(--radius-pill)', display: 'inline-flex', alignItems: 'center', gap: 6, ...t, ...style }}>{icon}{children}</span>;
}
