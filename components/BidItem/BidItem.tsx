import React from 'react';
import { View, Image, Text } from 'react-native';
import { IBidItemProps } from '../../interfaces';
import EthPrice from '../EthPrice/EthPrice';
import { globalStyles } from '../../styles';
import { Heading } from '../../components';
import { Colors } from '../../enums';
import { styles } from './styles';

function BidItem({ bid }: IBidItemProps) {
  const { name, price, image, date } = bid;

  return (
    <View style={[globalStyles.marginHorizontal, styles.container]}>
      <View style={styles.leftContent}>
        <Image 
          source={image}
          resizeMode='contain'
          style={styles.image}
        />
        <View style={styles.titlesContainer}>
          <Heading 
            title={`Bid placed by ${name}`}
            type={5}
          />
          <Text style={styles.dateTitle}>{date}</Text>
        </View>
      </View>
      <EthPrice price={price} color={Colors.GRAY} />
    </View>
  )
}

export default BidItem;
