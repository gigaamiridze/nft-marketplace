import React from 'react';
import { View, Text } from 'react-native';
import { IBidItemProps } from '../../interfaces';

function BidItem({ bid }: IBidItemProps) {
  const { name, price, image, date } = bid;

  return (
    <View>
      <Text>BidItem</Text>
    </View>
  )
}

export default BidItem;
