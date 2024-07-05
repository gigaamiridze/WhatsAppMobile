import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export enum Sizes {
  TINY = 14,
  SMALL = 16,
  MEDIUM = 18,
  LARGE = 20,
  EXTRA_LARGE = 22,
  HUGE = 32,
  EXTRA_HUGE = 42,
  SCREEN_WIDTH = width,
  SCREEN_HEIGHT = height,
}
