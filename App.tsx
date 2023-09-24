import { useEffect } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';

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
      <Text>Open up App.tsx to start working on your app!</Text>
    </NavigationContainer>
  );
}

export default App;
