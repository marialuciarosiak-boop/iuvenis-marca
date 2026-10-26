import React from 'react';
const V = {
  primary: { background: 'var(--action-primary)', color: '#fff', hover: 'var(--action-primary-hover)' },
  premium: { background: 'var(--action-premium)', color: 'var(--navy-950)', hover: 'var(--gold-300)' },
  sand: { background: 'var(--sand-500)', color: '#fff', hover: 'var(--sand-400)' },
  outline: { background: 'transparent', color: 'currentColor', border: '1px solid currentColor', hover: 'rgba(255,255,255,0.08)' },
  app: { background: 'var(--gradient-app-cta)', color: '#fff', hover: null },
};
const S = { sm: { padding: '8px 16px', fontSize: 13 }, md: { padding: '12px 24px', fontSize: 14 }, lg: { padding: '16px 32px', fontSize: 16 } };
export function Button({ children, variant = 'primary', size = 'md', block = false, disabled = false, iconRight, onClick, style }) {
  const [h, setH] = React.useState(false);
  const v = V[variant] || V.primary;
  return (
    <button type="button" disabled={disabled} onClick={onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, border: v.border || 'none', borderRadius: variant === 'app' ? 'var(--radius-sm)' : 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, display: block ? 'flex' : 'inline-flex', width: block ? '100%' : undefined,
        alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast)',
        ...S[size], background: h && v.hover && !disabled ? v.hover : v.background, color: v.color, ...style }}>
      {children}{iconRight ? <span aria-hidden="true">{iconRight}</span> : null}
    </button>
  );
}
