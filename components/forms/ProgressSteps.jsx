import React from 'react';
export function ProgressSteps({ total = 6, current = 1, showLabel = true }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)' }}>
      <div style={{ display: 'flex', gap: 5 }}>
        {Array.from({ length: total }).map((_, i) => <span key={i} style={{ width: 38, height: 4, borderRadius: 2, background: i < current ? 'var(--azure-500)' : '#dfe3ee', transition: 'background var(--dur-base)' }}></span>)}
      </div>
      {showLabel ? <span style={{ fontSize: 11, color: 'var(--slate-500)' }}>Etapa {current} de {total}</span> : null}
    </div>
  );
}
