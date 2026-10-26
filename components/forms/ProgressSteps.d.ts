export interface ProgressStepsProps {
  total?: number;
  /** 1-based current step */
  current?: number;
  showLabel?: boolean;
}
export declare function ProgressSteps(props: ProgressStepsProps): JSX.Element;
