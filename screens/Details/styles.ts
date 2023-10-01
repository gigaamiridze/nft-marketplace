import { StyleSheet } from 'react-native';
import { Sizes } from '../../enums';

export const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingVertical: Sizes.REGULAR,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: Sizes.X_LARGE,
  },
});
