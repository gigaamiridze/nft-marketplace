import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { INFTCardProps } from '../../interfaces';
import { CircleButton } from '../../components';
import { globalStyles } from '../../styles';
import { icons } from '../../constants';
import { Routes } from '../../enums';
import { styles } from './styles';
import RectButton from '../RectButton/RectButton';
import EthPrice from '../EthPrice/EthPrice';
import SubInfo from '../SubInfo/SubInfo';
import NFTName from '../NFTName';

function NFTCard({ data }: INFTCardProps) {
  const { name, creator, price, image } = data;
  const navigation = useNavigation();

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
          <RectButton 
            title='Place a bid'
            minWidth={120}
            headingType={4}
            handlePress={() => navigation.navigate(Routes.Details, { data })}
          />
        </View>
      </View>
    </View>
  )
}

export default NFTCard;
