import React from 'react';
import { SafeAreaView } from 'react-native';
import { FocusedStatusBar } from '../components';
import { Colors } from '../enums';

function Home() {
  return (
    <SafeAreaView>
      <FocusedStatusBar background={Colors.PRIMARY} />
    </SafeAreaView>
  )
}

export default Home;
