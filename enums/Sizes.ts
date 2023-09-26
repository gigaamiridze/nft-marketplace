import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export enum Sizes {
  X_SMALL = 8,
  SMALL = 12,
  FONT = 14,
  MEDIUM = 16,
  LARGE = 18,
  X_LARGE = 24,
  HEIGHT = height,
  WIDTH = width,
}
