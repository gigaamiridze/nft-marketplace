import { StyleSheet } from 'react-native';
import { shadows } from '../../constants';
import { Colors, Sizes } from '../../enums';

export const style = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    backgroundColor: Colors.WHITE,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.light,
    position: 'absolute',
  },
  icon: {
    width: Sizes.X_LARGE,
    height: Sizes.X_LARGE,
  },
});
