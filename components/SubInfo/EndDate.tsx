import React from 'react';
import { View } from 'react-native';
import { Heading  } from '../../components';
import { Colors } from '../../enums';
import { styles } from './styles';

function EndDate() {
  return (
    <View style={styles.endDateContainer}>
      <Heading 
        title='Ending in' 
        type={5} 
        color={Colors.SECONDARY}
        fontWeight='regular'
      />
      <Heading 
        title='12h 30m' 
        type={3} 
      />
    </View>
  )
}

export default EndDate;
