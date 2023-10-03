import React from 'react';
import { View, Image } from 'react-native';
import { IEthPriceProps } from '../../interfaces';
import { Heading } from '../../components';
import { icons } from '../../constants';
import { styles } from './styles';

function EthPrice({ price, color }: IEthPriceProps) {
  return (
    <View style={styles.ethPriceContainer}>
      <Image 
        source={icons.eth}
        resizeMode='contain'
        style={[styles.ethImage, { tintColor: color }]}
      />
      <Heading 
        title={price.toString()}
        type={4}
        fontWeight='medium'
        color={color}
      />
    </View>
  )
}

export default EthPrice;
