import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader';
import DetailsDesc from '../../components/DetailsDesc/DetailsDesc';
import RectButton from '../../components/RectButton/RectButton';
import EthPrice from '../../components/EthPrice/EthPrice';
import SubInfo from '../../components/SubInfo/SubInfo';
import NFTName from '../../components/NFTName';
import { FocusedStatusBar, BidItem, Heading } from '../../components';
import { IRootStackParams } from '../../interfaces';
import { globalStyles } from '../../styles';
import { styles } from './styles';

function Details() {
  type DetailsScreenProps = RouteProp<IRootStackParams, 'Details'>;
  const route = useRoute<DetailsScreenProps>();
  const { data } = route.params;

  return (
    <SafeAreaView style={globalStyles.flex}>
      <FocusedStatusBar
        backgroundColor='transparent'
        barStyle='dark-content'
        translucent={true}
      />
      <View style={styles.buttonWrapper}>
        <RectButton
          title='Place a bid'
          minWidth={170}
          headingType={2}
        />
      </View>
      <FlatList
        data={data.bids}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <BidItem bid={item} />}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader image={data.image} />
            <View style={globalStyles.marginHorizontal}>
              <SubInfo />
              <View style={styles.flexRow}>
                <NFTName name={data.name} creator={data.creator} />
                <EthPrice price={data.price} />
              </View>
              <DetailsDesc description={data.description} />
              <View style={styles.bidTitle}>
                <Heading 
                  title='Current Bid'
                  type={4}
                />
              </View>
            </View>
          </>
        )}
      />
    </SafeAreaView>
  )
}

export default Details;
