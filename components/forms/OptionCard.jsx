import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function OptionCard({ icon, title, description, selected = false, onClick, style }) {
  const [h, setH] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px', background: '#fff', textAlign: 'left', cursor: 'pointer',
        border: '1px solid ' + (selected ? 'var(--azure-500)' : h ? 'var(--azure-300)' : 'transparent'), borderRadius: 'var(--radius-sm)',
        boxShadow: selected ? '0 0 0 3px rgba(45,127,249,0.14)' : 'var(--shadow-option)', fontFamily: 'var(--font-sans)', transition: 'all var(--dur-fast) var(--ease-out)', ...style }}>
      {icon ? <Icon name={icon} size={18} color="var(--azure-500)" /> : null}
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--navy-800)' }}>{title}</span>
        {description ? <span style={{ display: 'block', fontSize: 11, color: 'var(--slate-500)', marginTop: 1 }}>{description}</span> : null}
      </span>
      <span style={{ width: 18, height: 18, borderRadius: '50%', border: '1.5px solid ' + (selected ? 'var(--azure-500)' : '#d6dae3'), display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {selected ? <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--azure-500)' }}></span> : null}
      </span>
    </button>
  );
}
