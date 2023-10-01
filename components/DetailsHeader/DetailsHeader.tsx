import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IDetailsHeaderProps } from '../../interfaces';
import { CircleButton } from '../../components';
import { icons } from '../../constants';
import { styles } from './styles';

function DetailsHeader({ image }: IDetailsHeaderProps) {
  const navigation = useNavigation();
  const statusBarHeight = StatusBar.currentHeight !== undefined ? StatusBar.currentHeight : 0;

  return (
    <View style={styles.container}>
      <Image 
        source={image}
        resizeMode='cover'
        style={styles.image}
      />
      <CircleButton 
        iconUrl={icons.left}
        top={statusBarHeight + 10}
        left={15}
        handlePress={() => navigation.goBack()}
      />
      <CircleButton 
        iconUrl={icons.heart}
        top={statusBarHeight + 10} 
        right={15}
      />
    </View>
  )
}

export default DetailsHeader;
