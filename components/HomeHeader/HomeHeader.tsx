import React from 'react';
import { View, Image, TextInput } from 'react-native';
import { images, icons } from '../../constants';
import { Heading } from '../../components';
import { Colors } from '../../enums';
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
          <Image 
            source={icons.badge}
            resizeMode='contain'
            style={styles.badge}
          />
        </View>
      </View>
      <View style={styles.titlesContainer}>
        <Heading 
          title='Hello Victoria 👋'
          type={5}
          color={Colors.WHITE}
          fontWeight='regular'
        />
        <Heading 
          title="Let's Find Masterpiece Art"
          type={2}
          color={Colors.WHITE}
          fontWeight='bold'
          numberOfLines={1}
        />
      </View>
      <View style={styles.searchContainer}>
        <Image 
          source={icons.search}
          resizeMode='contain'
          style={styles.searchIcon}
        />
        <TextInput 
          placeholder='Search NFTs'
          style={styles.searchInput}
        />
      </View>
    </View>
  )
}

export default HomeHeader;
