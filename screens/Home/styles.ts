import { StyleSheet } from 'react-native';
import { Colors } from '../../enums';

export const styles = StyleSheet.create({
  content: {
    zIndex: 0,
  },
  backgroundBlock: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  upperBox: {
    height: 300,
  },
  lowerBox: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});
