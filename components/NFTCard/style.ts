import { StyleSheet } from 'react-native';
import { shadows } from '../../constants';
import { Colors, Sizes } from '../../enums';

export const style = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: Sizes.REGULAR,
    marginBottom: Sizes.X_LARGE,
    ...shadows.dark,
  },
  imageWrapper: {
    width: '100%',
    height: 250,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: Sizes.REGULAR,
    borderTopRightRadius: Sizes.REGULAR,
  },
});
