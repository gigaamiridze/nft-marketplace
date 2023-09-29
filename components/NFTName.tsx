import React from 'react';
import { View } from 'react-native';
import { Colors } from '../enums';
import { Heading } from '../components';
import { INFTNameProps } from '../interfaces';

function NFTName(props: INFTNameProps) {
  const { name, creator } = props;
 
  return (
    <View>
      <Heading 
        title={name} 
        type={2} 
      />
      <Heading 
        title={`by ${creator}`} 
        type={5} 
        color={Colors.SECONDARY}
        fontWeight='regular'
      />
    </View>
  )
}

export default NFTName;
