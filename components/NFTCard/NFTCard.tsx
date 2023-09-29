import React from 'react';
import { View, Image } from 'react-native';
import { INFTCardProps } from '../../interfaces';
import { CircleButton, EthPrice } from '../../components';
import { globalStyles } from '../../styles';
import { icons } from '../../constants';
import { styles } from './styles';
import SubInfo from '../SubInfo/SubInfo';
import NFTName from '../NFTName';

function NFTCard({ data }: INFTCardProps) {
  const { name, creator, price, description, image, bids } = data;

  return (
    <View style={[styles.cardContainer, globalStyles.marginHorizontal]}>
      <View style={styles.imageWrapper}>
        <Image 
          source={image}
          resizeMode='cover'
          style={styles.image}
        />
        <CircleButton 
          iconUrl={icons.heart} 
          top={15} 
          right={15} 
        />
      </View>
      <View style={[globalStyles.marginHorizontal, styles.cardInfo]}>
        <SubInfo />
        <View style={styles.nftNameWrapper}>
          <NFTName name={name} creator={creator} />
        </View>
        <View style={styles.flexRow}>
          <EthPrice price={price} />
        </View>
      </View>
    </View>
  )
}

export default NFTCard;
