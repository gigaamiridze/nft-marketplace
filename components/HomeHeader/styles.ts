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
});
