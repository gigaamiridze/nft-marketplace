import { StyleSheet } from 'react-native';
import { shadows } from '../../constants';
import { Colors, Sizes } from '../../enums';

export const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -Sizes.X_LARGE - 4,
  },
  peopleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  endDateContainer: {
    backgroundColor: Colors.WHITE,
    paddingVertical: Sizes.X_SMALL,
    paddingHorizontal: Sizes.REGULAR,
    borderRadius: Sizes.SMALL,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.light,
    elevation: 1,
  },
  personImage: {
    width: 48,
    height: 48,
  },
});
