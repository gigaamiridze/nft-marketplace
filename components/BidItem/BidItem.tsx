import React from 'react';
import { View, Image } from 'react-native';
import { IBidItemProps } from '../../interfaces';
import { globalStyles } from '../../styles';
import { styles } from './styles';

function BidItem({ bid }: IBidItemProps) {
  const { name, price, image, date } = bid;

  return (
    <View style={[globalStyles.marginHorizontal, styles.container]}>
      <Image 
        source={image}
        resizeMode='contain'
        style={styles.image}
      />
    </View>
  )
}

export default BidItem;
