import { FontFamilyType, FontWeightType } from '../types';

export interface IHeadingProps {
  title: string;
  type: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  fontSize?: number;
  fontFamily?: FontFamilyType;
  fontWeight?: FontWeightType;
  numberOfLines?: number;
  lineHeight?: number;
  letterSpacing?: number;
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'auto';
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
}
