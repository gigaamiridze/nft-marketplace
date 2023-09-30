import React from 'react';
import { View, Image } from 'react-native';
import { images } from '../../constants';
import { styles } from './styles';

function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Image 
          source={images.logo}
          resizeMode='contain'
          style={styles.logo}
        />
        <View style={styles.imageWrapper}>
          <Image 
            source={images.person01}
            resizeMode='contain'
            style={styles.personImage}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader;
