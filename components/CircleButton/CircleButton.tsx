import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { ICircleButtonProps } from '../../interfaces';
import { style } from './style';

function CircleButton(props: ICircleButtonProps) {
  const { iconUrl, top, right } = props;

  return (
    <TouchableOpacity 
      activeOpacity={0.5}
      style={[style.button, { top, right }]}
    >
      <Image 
        source={iconUrl}
        resizeMode='contain'
        style={style.icon}
      />
    </TouchableOpacity>
  )
}

export default CircleButton;
