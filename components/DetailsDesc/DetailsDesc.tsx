import React, { useState } from 'react';
import { View } from 'react-native';
import { IDetailsDescProps } from '../../interfaces';
import { Heading } from '../../components';
import { Colors, Sizes } from '../../enums';
import { styles } from './styles';

function DetailsDesc({ description }: IDetailsDescProps) {
  const [descriptionText, setDescriptionText] = useState<string>(description.slice(0, 130));
  const [isReadMore, setIsReadMore] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Heading
        title='Description'
        type={4}
      />
      <Heading
        title={`${descriptionText}${!isReadMore ? '...' : ''}`}
        type={5}
        color={Colors.GRAY}
        fontWeight='medium'
        lineHeight={Sizes.LARGE}
      >
        <Heading
          title={isReadMore ? ' Show Less' : ' Read More'}
          type={5}
          handlePress={() => {
            if (!isReadMore) {
              setDescriptionText(description);
              setIsReadMore(true);
            } else {
              setDescriptionText(description.slice(0, 130));
              setIsReadMore(false);
            }
          }}
        />
      </Heading>
    </View>
  )
}

export default DetailsDesc;
