export interface PhotoCardProps {
  src?: string;
  alt?: string;
  /** University name overlaid at the bottom (stand-in for the official logo lockup) */
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  height?: number;
  fade?: boolean;
  style?: React.CSSProperties;
}
export declare function PhotoCard(props: PhotoCardProps): JSX.Element;
