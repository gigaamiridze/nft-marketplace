import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { FocusedStatusBar } from '../../components';
import { globalStyles } from '../../styles';
import { Colors } from '../../enums';
import { NFTData } from '../../data';
import { style } from './style';

function Home() {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <FocusedStatusBar background={Colors.PRIMARY} />
      <View style={globalStyles.flex}>
        <View style={style.content}>
          <FlatList 
            data={NFTData}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            ListHeaderComponent={() => <Text>NFTs Header</Text>}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home;
