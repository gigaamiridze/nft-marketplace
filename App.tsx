import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import { StackNavigation } from './navigation';
import { images } from './constants';

function App() {
  const [fontsLoaded] = useFonts({
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync().then(() => {
      if (fontsLoaded) {
        SplashScreen.hideAsync();  
      } 
    });
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;
