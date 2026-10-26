export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = ocean CTA · premium = gold on navy · sand = warm · outline = on dark · app = quiz gradient */
  variant?: 'primary' | 'premium' | 'sand' | 'outline' | 'app';
  size?: 'sm' | 'md' | 'lg';
  block?: boolean;
  disabled?: boolean;
  iconRight?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
