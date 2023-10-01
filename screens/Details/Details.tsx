import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { FocusedStatusBar, BidItem, DetailsHeader } from '../../components';
import RectButton from '../../components/RectButton/RectButton';
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
        ListHeaderComponent={() => <DetailsHeader data={data} />}
      />
    </SafeAreaView>
  )
}

export default Details;
