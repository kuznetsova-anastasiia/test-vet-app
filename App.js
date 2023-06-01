import * as Font from 'expo-font';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Navbar } from './components/Navbar';
import { Home } from './screens/Home';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import { default as mapping } from './mapping.json';

const fonts = () => Font.loadAsync({
  'outfit-r': require('./assets/fonts/Outfit-Regular.ttf'),
  'outfit-m': require('./assets/fonts/Outfit-Medium.ttf'),
  'outfit-b': require('./assets/fonts/Outfit-SemiBold.ttf')
});

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <Provider store={Store}>
        <ApplicationProvider {...eva} theme={eva.light} customMapping={mapping}>
          <View style={styles.container}>
            <Image
              resizeMode='contain'
              source={require('./assets/images/bg.png')}
              style={styles.bg}
            />

            <Home />
          </View>

          <View style={styles.navbar}>
            <Navbar />
          </View>
        </ApplicationProvider>
      </Provider>
    );
  } else {
    return (
      <AppLoading startAsync={fonts} onFinish={() => setIsLoaded(true)} onError={() => console.log('error')} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFBFF',
    overflow: 'visible'
  },
  bg: {
    flex: 1,
    position: 'absolute',
    bottom: '33%',
    width: '100%',
    height: '100%',
  },
  navbar: {
    width: '100%',
  }
});
