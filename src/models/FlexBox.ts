import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface IFlexBoxProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  alignItems?: 'stretch' | 'center' | 'baseline' | 'flex-start' | 'flex-end';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  style?: ViewStyle | ViewStyle[];
  children: ReactNode;
}
