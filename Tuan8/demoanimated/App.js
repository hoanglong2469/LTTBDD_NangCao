import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, TouchableOpacity } from "react-native";

const App = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const moveBall = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const backBall = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const xVal = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const yVal = fadeAnim.interpolate({
    inputRange: [350, 350],
    outputRange: [0, 1],
  });

  const animStyle = {
    transform: [
      {
        translateX: xVal,
        translateY: yVal,
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim
          }
        ]}
      >
        <Text style={styles.fadingText}>Welcome to Animation React Native</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Text In View" onPress={fadeIn} />
        <Button title="Text Out View" onPress={fadeOut} />
        <Button title="Top To Bottom" onPress={moveBall} />
        <Button title="Bottom To Top" onPress={backBall} />
      
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 22
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});

export default App;