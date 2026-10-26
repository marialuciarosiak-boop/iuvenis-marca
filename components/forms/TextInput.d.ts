export interface TextInputProps {
  label?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
  type?: string;
  hint?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function TextInput(props: TextInputProps): JSX.Element;
