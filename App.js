/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Dimensions,
} from 'react-native';
import BottomTab from './src/components/BottomTab';
import BackgroundHeader from './src/components/BackgroundHeader';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';


const App = () => {
  const [tab, setTab] = useState(0);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <BackgroundHeader style={[tab == 0 ? styles.bg1 : styles.bg2]} />
        <ScrollView style={styles.scrollView}>
          { tab == 0 && <HomeScreen />}
          { tab == 1 && <SearchScreen />}
        </ScrollView>
        <BottomTab selected={tab} onSelected={index => setTab(index)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F1F2'
  },
  bg1: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 250
  },
  bg2: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 280,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  scrollView: {
    flex: 1
  }
});

export default App;
