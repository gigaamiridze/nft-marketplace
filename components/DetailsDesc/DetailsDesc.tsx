import React from 'react';
import { View } from 'react-native';
import { IDetailsDescProps } from '../../interfaces';
import { Heading } from '../../components';
import { Colors } from '../../enums';
import { styles } from './styles';

function DetailsDesc({ description }: IDetailsDescProps) {
  return (
    <View style={styles.container}>
      <Heading 
        title={'Description'}
        type={4}
      />
      <Heading 
        title={description}
        type={5}
        color={Colors.GRAY}
        fontWeight='medium'
        lineHeight={18}
      />
    </View>
  )
}

export default DetailsDesc;
