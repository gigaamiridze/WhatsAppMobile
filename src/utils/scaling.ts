import DeviceInfo from 'react-native-device-info';
import { Sizes } from '../constants';

const isSmall = Sizes.SCREEN_WIDTH <= 375 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }

  return 350;
};

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (Sizes.SCREEN_WIDTH > 410) {
    return 620;
  }

  return 680;
};

const guidelineBaseFonts = () => {
  if (Sizes.SCREEN_WIDTH > 410) {
    return 430;
  }

  return 400;
};

const horizontalScale = (size: number) => {
  return (Sizes.SCREEN_WIDTH / guidelineBaseWidth()) * size;
};

const verticalScale = (size: number) => {
  return (Sizes.SCREEN_HEIGHT / guidelineBaseHeight()) * size;
};

const scaleFontSize = (size: number) => {
  return Math.round((size * Sizes.SCREEN_WIDTH) / guidelineBaseFonts());
};

export { horizontalScale, verticalScale, scaleFontSize };
