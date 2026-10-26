export interface SectionHeadingProps {
  title: React.ReactNode;
  /** Highlighted phrase: bold (sans), gold italic (serif), periwinkle (app) */
  emphasis?: React.ReactNode;
  subtitle?: React.ReactNode;
  variant?: 'sans' | 'serif' | 'app';
  tone?: 'light' | 'dark';
  inline?: boolean;
  align?: 'center' | 'left';
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
