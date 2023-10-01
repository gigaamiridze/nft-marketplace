import React from 'react';
import { View, Image } from 'react-native';
import { IDetailsHeaderProps } from '../../interfaces';
import { styles } from './styles';

function DetailsHeader({ data }: IDetailsHeaderProps) {
  return (
    <View style={styles.container}>
      <Image 
        source={data.image}
        resizeMode='cover'
        style={styles.image}
      />
    </View>
  )
}

export default DetailsHeader;
