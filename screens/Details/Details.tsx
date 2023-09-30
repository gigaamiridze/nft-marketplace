import React from 'react';
import { SafeAreaView, View } from 'react-native';
import RectButton from '../../components/RectButton/RectButton';
import { FocusedStatusBar } from '../../components';
import { globalStyles } from '../../styles';
import { styles } from './styles';

function Details() {
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
    </SafeAreaView>
  )
}

export default Details;
