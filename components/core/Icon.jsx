import React from 'react';
/** Phosphor Icons wrapper. Requires <script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script> on the page. */
export function Icon({ name, weight = 'fill', size = 24, color = 'currentColor', style }) {
  const cls = weight === 'regular' ? 'ph ph-' + name : 'ph-' + weight + ' ph-' + name;
  return <i className={cls} aria-hidden="true" style={{ fontSize: size, color, lineHeight: 1, display: 'inline-block', ...style }}></i>;
}
