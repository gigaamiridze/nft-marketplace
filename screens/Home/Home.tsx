import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import NFTCard from '../../components/NFTCard/NFTCard';
import { FocusedStatusBar } from '../../components';
import { INFTItem } from '../../interfaces';
import { globalStyles } from '../../styles';
import { Colors } from '../../enums';
import { NFTData } from '../../data';
import { styles } from './styles';

function Home() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [nftData, setNftData] = useState<INFTItem[]>(NFTData);

  const handleSearch = (value: string) => {
    setSearchValue(value);

    if (value.length === 0) setNftData(NFTData);

    const filteredData = NFTData.filter((item) => 
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };
  
  return (
    <SafeAreaView style={globalStyles.flex}>
      <FocusedStatusBar backgroundColor={Colors.PRIMARY} />
      <View style={globalStyles.flex}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          style={styles.content}
        >
          <HomeHeader 
            searchValue={searchValue} 
            handleSearch={handleSearch}
          />
          {nftData.map((item) => (
            <NFTCard 
              key={item.id}
              data={item}
            />
          ))}
        </ScrollView>
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
