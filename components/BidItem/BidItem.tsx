import React from 'react';
import { View, Image, Text } from 'react-native';
import { IBidItemProps } from '../../interfaces';
import { Heading } from '../../components';
import { globalStyles } from '../../styles';
import { styles } from './styles';
import { Colors } from '../../enums';

function BidItem({ bid }: IBidItemProps) {
  const { name, price, image, date } = bid;

  return (
    <View style={[globalStyles.marginHorizontal, styles.container]}>
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
  )
}

export default BidItem;
