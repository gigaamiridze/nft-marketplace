import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { ICircleButtonProps } from '../../interfaces';
import { styles } from './styles';

function CircleButton(props: ICircleButtonProps) {
  const { iconUrl, top, left, right, handlePress } = props;

  return (
    <TouchableOpacity 
      activeOpacity={0.5}
      onPress={handlePress}
      style={[styles.button, { top, left, right }]}
    >
      <Image 
        source={iconUrl}
        resizeMode='contain'
        style={styles.icon}
      />
    </TouchableOpacity>
  )
}

export default CircleButton;
