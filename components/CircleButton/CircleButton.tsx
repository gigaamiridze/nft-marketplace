import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { ICircleButtonProps } from '../../interfaces';
import { styles } from './styles';

function CircleButton(props: ICircleButtonProps) {
  const { iconUrl, top, right } = props;

  return (
    <TouchableOpacity 
      activeOpacity={0.5}
      style={[styles.button, { top, right }]}
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
