import React from 'react';
export function TextInput({ label, placeholder, value, onChange, type = 'text', hint, style }) {
  const [f, setF] = React.useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-sans)', ...style }}>
      {label ? <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--navy-800)' }}>{label}</span> : null}
      <input type={type} placeholder={placeholder} value={value} onChange={e => onChange && onChange(e.target.value)} onFocus={() => setF(true)} onBlur={() => setF(false)}
        style={{ fontFamily: 'inherit', fontSize: 14, padding: '12px 14px', borderRadius: 'var(--radius-sm)', background: '#fff', color: 'var(--navy-950)', outline: 'none',
          border: '1px solid ' + (f ? 'var(--azure-500)' : '#e1e5ee'), boxShadow: f ? '0 0 0 3px rgba(45,127,249,0.14)' : 'var(--shadow-option)' }} />
      {hint ? <span style={{ fontSize: 11, color: 'var(--slate-500)' }}>{hint}</span> : null}
    </label>
  );
}
