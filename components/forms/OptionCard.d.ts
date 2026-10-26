export interface OptionCardProps {
  icon?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function OptionCard(props: OptionCardProps): JSX.Element;
