import { StyleSheet } from 'react-native';
import { shadows } from '../../constants';
import { Colors, Sizes } from '../../enums';

export const styles = StyleSheet.create({
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
  cardInfo: {
    marginTop: -Sizes.X_LARGE,
    paddingBottom: Sizes.LARGE + 2,
  },
  nftNameWrapper: {
    marginVertical: 5,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
