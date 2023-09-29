import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IRectButtonProps } from '../../interfaces';
import { Heading } from '../../components';
import { Colors } from '../../enums';
import { styles } from './styles';

function RectButton(props: IRectButtonProps) {
  const { title, minWidth, headingType, handlePress } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handlePress}
      style={[styles.button, { minWidth }]}
    >
      <Heading 
        title={title}
        type={headingType}
        color={Colors.WHITE} 
      />
    </TouchableOpacity>
  )
}

export default RectButton;
