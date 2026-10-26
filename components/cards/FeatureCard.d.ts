/** @startingPoint section="Cards" subtitle="Icon + title + description benefit card" viewport="700x300" */
export interface FeatureCardProps {
  /** Phosphor icon name */
  icon?: string;
  iconWeight?: 'fill' | 'light' | 'regular';
  title: React.ReactNode;
  description?: React.ReactNode;
  /** muted = mist gray · brand = ocean · warm = sand highlight · premium = borderless grid cell on navy */
  tone?: 'muted' | 'brand' | 'warm' | 'premium';
  align?: 'center' | 'left';
  style?: React.CSSProperties;
}
export declare function FeatureCard(props: FeatureCardProps): JSX.Element;
