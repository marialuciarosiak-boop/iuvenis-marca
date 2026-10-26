import React from 'react';
import { Icon } from '../core/Icon.jsx';
const T = {
  muted: { bg: 'var(--mist-300)', title: 'var(--petrol-900)', body: 'var(--text-body)', icon: 'var(--petrol-900)' },
  brand: { bg: 'var(--ocean-700)', title: '#fff', body: 'rgba(255,255,255,0.92)', icon: '#fff' },
  warm: { bg: 'var(--sand-500)', title: '#fff', body: 'rgba(255,255,255,0.95)', icon: '#fff' },
  premium: { bg: 'transparent', title: '#fff', body: 'var(--text-on-dark-muted)', icon: 'var(--gold-500)' },
};
export function FeatureCard({ icon, iconWeight, title, description, tone = 'muted', align, style }) {
  const t = T[tone] || T.muted;
  const premium = tone === 'premium';
  const a = align || (premium ? 'left' : 'center');
  return (
    <div style={{ background: t.bg, borderRadius: premium ? 0 : 'var(--radius-lg)', padding: premium ? '40px 32px' : '32px 28px',
      boxShadow: premium ? 'none' : 'var(--shadow-card)', display: 'flex', flexDirection: 'column', alignItems: a === 'center' ? 'center' : 'flex-start',
      textAlign: a, gap: premium ? 16 : 8, ...style }}>
      {icon ? <Icon name={icon} weight={iconWeight || (premium ? 'light' : 'fill')} size={premium ? 22 : 28} color={t.icon} /> : null}
      <div style={{ fontFamily: premium ? 'var(--font-serif)' : 'var(--font-sans)', fontWeight: premium ? 500 : 600, fontSize: premium ? 22 : 18, lineHeight: 1.25, color: t.title, textWrap: 'balance' }}>{title}</div>
      {description ? <div style={{ fontSize: premium ? 13 : 12, lineHeight: 1.6, color: t.body, textWrap: 'pretty', marginTop: premium ? 8 : 0 }}>{description}</div> : null}
    </div>
  );
}
