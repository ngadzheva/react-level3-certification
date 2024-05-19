import { ReactNode } from 'react';

export interface ActionConfig {
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
}
  
export interface DialogConfig {
  title?: string;
  content: ReactNode;
  actions?: ActionConfig[];
  shouldDisplayCloseButton?: boolean;
  shouldDisplayCloseX?: boolean;
  isModal?: boolean;
}