import { ReactNode } from 'react';

export interface IHeadingProps {
  title: string;
  type: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  numberOfLines?: number;
  fontWeight?: FontWeightType; 
  lineHeight?: number; 
  children?: ReactNode;
  handlePress?: () => void;
}

type FontWeightType = 'light' | 'regular' | 'medium' | 'semiBold' | 'bold';
