import React from 'react';
import { SafeAreaView, Text } from 'react-native';
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
      <Text>Details</Text>
    </SafeAreaView>
  )
}

export default Details;
