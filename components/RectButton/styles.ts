import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '../../enums';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: Sizes.X_SMALL + 2,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
