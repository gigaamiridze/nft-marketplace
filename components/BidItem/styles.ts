import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../enums';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 48,
    height: 48,
  },
  titlesContainer: {
    rowGap: 5,
  },
  dateTitle: {
    fontSize: 10,
    fontFamily: Fonts.InterRegular,
    color: Colors.SECONDARY,
  },
});
