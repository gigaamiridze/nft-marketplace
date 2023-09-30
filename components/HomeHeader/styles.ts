import { StyleSheet } from 'react-native';
import { Colors, Sizes, Fonts } from '../../enums';

export const styles = StyleSheet.create({
  container: {
    padding: Sizes.LARGE + 2,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 90,
    height: 25,
  },
  imageWrapper: {
    width: 45,
    height: 45,
  },
  personImage: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    width: 15,
    height: 15,
    right: 0,
    bottom: 0,
  },
  titlesContainer: {
    marginTop: Sizes.LARGE,
    marginBottom: Sizes.X_LARGE + 6,
    rowGap: 5,
  },
  searchContainer: {
    width: '100%',
    backgroundColor: Colors.GRAY,
    borderRadius: Sizes.MEDIUM,
    paddingHorizontal: Sizes.MEDIUM,
    paddingVertical: Sizes.SMALL - 2,
    marginBottom: Sizes.REGULAR,
    columnGap: Sizes.SMALL,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchInput: {
    flex: 1,
    fontFamily: Fonts.InterRegular,
    fontSize: Sizes.REGULAR,
    color: Colors.WHITE,
  },
});
