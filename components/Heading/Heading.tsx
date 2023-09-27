import React from 'react';
import { Text } from 'react-native';
import { Fonts } from '../../enums';
import { styles } from './styles';
import { IHeadingProps } from '../../interfaces';

function Heading(props: IHeadingProps) {
  const { title, type, color, numberOfLines, fontWeight } = props;

  const styleToApply = () => {
    switch (type) {
      case 1:
        return styles.title1;
      case 2:
        return styles.title2;
      case 3:
        return styles.title3;
      case 4:
        return styles.title4;
      case 5:
        return styles.title5;
      case 6:
        return styles.title6;
      default:
        return styles.title3;
    }
  }

  const applyFontWeight = () => {
    switch (fontWeight) {
      case 'light':
        return Fonts.InterLight;
      case 'regular':
        return Fonts.InterRegular;
      case 'medium':
        return Fonts.InterMedium;
      case 'semiBold':
        return Fonts.InterSemiBold;
      case 'bold':
        return Fonts.InterBold;
      default:
        return Fonts.InterMedium;
    }
  }

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles.title,
        styleToApply(),
        color ? { color } : null,
        fontWeight ? { fontFamily: applyFontWeight() } : null
      ]}
    >
      {title}
    </Text>
  )
}

export default Heading;
