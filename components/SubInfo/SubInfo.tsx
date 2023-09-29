import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import EndDate from './EndDate';
import People from './People';

function SubInfo() {
  return (
    <View style={styles.infoContainer}>
      <People />
      <EndDate />
    </View>
  )
}

export default SubInfo;
