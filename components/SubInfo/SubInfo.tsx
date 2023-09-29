import React from 'react';
import { View } from 'react-native';
import People from './People';
import EndDate from './EndDate';
import { styles } from './styles';

function SubInfo() {
  return (
    <View style={styles.infoContainer}>
      <People />
      <EndDate />
    </View>
  )
}

export default SubInfo;
