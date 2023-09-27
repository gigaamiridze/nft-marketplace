import React from 'react';
import { View, Text, Image } from 'react-native';
import { INFTCardProps } from '../../interfaces';
import { globalStyles } from '../../styles';
import { style } from './style';

function NFTCard({ data }: INFTCardProps) {
  const { name, creator, price, description, image, bids } = data;

  return (
    <View style={[style.cardContainer, globalStyles.marginHorizontal]}>
      <View style={style.imageWrapper}>
        <Image 
          source={image}
          resizeMode='cover'
          style={style.image}
        />
      </View>
    </View>
  )
}

export default NFTCard;
