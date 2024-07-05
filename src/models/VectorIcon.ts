import { ViewStyle } from 'react-native';
import { IconType } from '../types';

export interface IVectorIconProps {
  type: IconType;
  name: string;
  size: number;
  color: string;
  style?: ViewStyle;
  onPress?: () => void;
}
