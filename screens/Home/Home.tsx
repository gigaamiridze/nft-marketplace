import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import NFTCard from '../../components/NFTCard/NFTCard';
import { FocusedStatusBar } from '../../components';
import { globalStyles } from '../../styles';
import { Colors } from '../../enums';
import { NFTData } from '../../data';
import { styles } from './styles';

function Home() {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <FocusedStatusBar background={Colors.PRIMARY} />
      <View style={globalStyles.flex}>
        <View style={styles.content}>
          <FlatList 
            data={NFTData}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <NFTCard data={item} />}
            ListHeaderComponent={() => <Text>NFTs Header</Text>}
          />
        </View>
        <View style={styles.backgroundBlock}>
          <View style={styles.upperBox}></View>
          <View style={styles.lowerBox}></View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home;
