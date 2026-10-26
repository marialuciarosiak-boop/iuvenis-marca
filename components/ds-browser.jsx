// Generated from components/**/*.jsx for direct browser use (no build). Regenerate when components change.
(function(){

/** Phosphor Icons wrapper. Requires <script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script> on the page. */
function Icon({ name, weight = 'fill', size = 24, color = 'currentColor', style }) {
  const cls = weight === 'regular' ? 'ph ph-' + name : 'ph-' + weight + ' ph-' + name;
  return <i className={cls} aria-hidden="true" style={{ fontSize: size, color, lineHeight: 1, display: 'inline-block', ...style }}></i>;
}


const V = {
  primary: { background: 'var(--action-primary)', color: '#fff', hover: 'var(--action-primary-hover)' },
  premium: { background: 'var(--action-premium)', color: 'var(--navy-950)', hover: 'var(--gold-300)' },
  sand: { background: 'var(--sand-500)', color: '#fff', hover: 'var(--sand-400)' },
  outline: { background: 'transparent', color: 'currentColor', border: '1px solid currentColor', hover: 'rgba(255,255,255,0.08)' },
  app: { background: 'var(--gradient-app-cta)', color: '#fff', hover: null },
};
const S = { sm: { padding: '8px 16px', fontSize: 13 }, md: { padding: '12px 24px', fontSize: 14 }, lg: { padding: '16px 32px', fontSize: 16 } };
function Button({ children, variant = 'primary', size = 'md', block = false, disabled = false, iconRight, onClick, style }) {
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


function Badge({ children, tone = 'light', icon, style }) {
  const t = { light: { background: '#fff', color: 'var(--navy-950)', boxShadow: 'var(--shadow-pill)' },
    gold: { background: 'rgba(180,138,74,0.14)', color: 'var(--gold-500)' },
    ocean: { background: 'var(--ocean-600)', color: '#fff' },
    dark: { background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid var(--border-on-dark)' } }[tone];
  return <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, padding: '6px 12px', borderRadius: 'var(--radius-pill)', display: 'inline-flex', alignItems: 'center', gap: 6, ...t, ...style }}>{icon}{children}</span>;
}



const T = {
  muted: { bg: 'var(--mist-300)', title: 'var(--petrol-900)', body: 'var(--text-body)', icon: 'var(--petrol-900)' },
  brand: { bg: 'var(--ocean-700)', title: '#fff', body: 'rgba(255,255,255,0.92)', icon: '#fff' },
  warm: { bg: 'var(--sand-500)', title: '#fff', body: 'rgba(255,255,255,0.95)', icon: '#fff' },
  premium: { bg: 'transparent', title: '#fff', body: 'var(--text-on-dark-muted)', icon: 'var(--gold-500)' },
};
function FeatureCard({ icon, iconWeight, title, description, tone = 'muted', align, style }) {
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


function PhotoCard({ src, alt = '', label, sublabel, height = 228, fade = true, style }) {
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



function OptionCard({ icon, title, description, selected = false, onClick, style }) {
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


function ProgressSteps({ total = 6, current = 1, showLabel = true }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)' }}>
      <div style={{ display: 'flex', gap: 5 }}>
        {Array.from({ length: total }).map((_, i) => <span key={i} style={{ width: 38, height: 4, borderRadius: 2, background: i < current ? 'var(--azure-500)' : '#dfe3ee', transition: 'background var(--dur-base)' }}></span>)}
      </div>
      {showLabel ? <span style={{ fontSize: 11, color: 'var(--slate-500)' }}>Etapa {current} de {total}</span> : null}
    </div>
  );
}


function TextInput({ label, placeholder, value, onChange, type = 'text', hint, style }) {
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


/** title: plain part; emphasis: highlighted part on its own line (unless inline). */
function SectionHeading({ title, emphasis, subtitle, variant = 'sans', tone = 'light', inline = false, align = 'center', style }) {
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

window.IuvenisDS = {Icon, Button, Badge, FeatureCard, PhotoCard, OptionCard, ProgressSteps, TextInput, SectionHeading};
})();
