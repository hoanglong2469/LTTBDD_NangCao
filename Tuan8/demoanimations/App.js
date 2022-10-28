import React, { useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Animated, SafeAreaView } from 'react-native';

import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [fadeAnim])
  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}


export default function App() {
  return (
    <View style={styles.container}>
      <FadeInView style={{width: 250, height: 50, marginLeft:60 , backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 14, textAlign: 'center', margin: 10}}>Wellcome to animate react native</Text>
      </FadeInView>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
