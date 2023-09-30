import { StyleSheet } from 'react-native';
import { Sizes } from '../../enums';

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
});
