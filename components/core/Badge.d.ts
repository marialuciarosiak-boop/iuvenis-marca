export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'light' | 'gold' | 'ocean' | 'dark';
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
