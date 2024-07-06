import { StyleSheet } from 'react-native';
import { horizontalScale } from '../../utils';
import { Colors, Sizes } from '../../constants';

const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  backgroundWhite: {
    backgroundColor: Colors.WHITE,
  },
  backgroundPrimary: {
    backgroundColor: Colors.PRIMARY,
  },
  paddingHorizontal: {
    paddingHorizontal: horizontalScale(Sizes.SMALL),
  },
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: horizontalScale(Sizes.SMALL),
  },
});

export default globalStyles;
