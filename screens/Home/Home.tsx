import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import NFTCard from '../../components/NFTCard/NFTCard';
import { FocusedStatusBar } from '../../components';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
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
            ListHeaderComponent={() => <HomeHeader />}
          />
        </View>
        <View style={styles.backgroundBlock}>
          <LinearGradient 
            colors={[Colors.DARK_GRAY, Colors.PRIMARY]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.upperBox}
          />
          <View style={styles.lowerBox}></View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home;
