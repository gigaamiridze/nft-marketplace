import React from 'react';
import { View, Image } from 'react-native';
import { images } from '../../constants';
import { Sizes } from '../../enums';
import { styles } from './styles';

function People() {
  const people = [images.person02, images.person03, images.person04];

  return (
    <View style={styles.peopleContainer}>
      {people.map((imgUrl, index) => (
        <Image 
          key={`person - ${index}`} 
          source={imgUrl}
          resizeMode='contain'
          style={[styles.personImage, { marginLeft: index === 0 ? 0 : -Sizes.SMALL }]}
        />
      ))}
    </View>
  )
}

export default People;
