import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../constants';
import { getFontFamily, scaleFontSize } from '../../../utils';

const styles = StyleSheet.create({
  title: {
    fontFamily: getFontFamily(Fonts.PRIMARY, '400'),
    color: Colors.BLACK,
  },
  title1: {
    fontSize: scaleFontSize(Sizes.HUGE),
  },
  title2: {
    fontSize: scaleFontSize(Sizes.EXTRA_LARGE),
  },
  title3: {
    fontSize: scaleFontSize(Sizes.LARGE),
  },
  title4: {
    fontSize: scaleFontSize(Sizes.MEDIUM),
  },
  title5: {
    fontSize: scaleFontSize(Sizes.SMALL),
  },
  title6: {
    fontSize: scaleFontSize(Sizes.TINY),
  },
});

export default styles;
