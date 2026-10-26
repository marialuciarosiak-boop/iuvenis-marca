export interface IconProps {
  /** Phosphor icon name, e.g. "play", "users-three", "video-camera", "briefcase", "target" */
  name: string;
  /** fill = institutional site; light/regular = premium & app */
  weight?: 'fill' | 'regular' | 'light' | 'thin' | 'bold' | 'duotone';
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
