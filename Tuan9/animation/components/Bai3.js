import * as React from "react";
import { View, StyleSheet, Animated, Text, } from "react-native";

export default function Bai3() {
  const location = React.useRef(
    new Animated.ValueXY({
      x: Math.floor(Math.random() * 300) + 1,
      y: Math.floor(Math.random() * 600) + 1,
    })
  ).current;
  const location1 = React.useRef(
    new Animated.ValueXY({
      x: Math.floor(Math.random() * 300) + 1,
      y: Math.floor(Math.random() * 600) + 1,
    })
  ).current;
  const location2 = React.useRef(
    new Animated.ValueXY({
      x: Math.floor(Math.random() * 300) + 1,
      y: Math.floor(Math.random() * 600) + 1,
    })
  ).current;
  const location3 = React.useRef(
    new Animated.ValueXY({
      x: Math.floor(Math.random() * 300) + 1,
      y: Math.floor(Math.random() * 600) + 1,
    })
  ).current;

  // handled box
  function onPress(evt) {
    Animated.sequence([
      Animated.timing(location, {
        toValue: {
          x: evt.nativeEvent.pageX - 75,
          y: evt.nativeEvent.pageY - 25,
        },
        useNativeDriver: true,
      }),
      Animated.timing(location1, {
        toValue: {
          x: Math.floor(Math.random() * 300) + 1,
          y: Math.floor(Math.random() * 600) + 1,
        },
        useNativeDriver: true,
      }),
      Animated.timing(location2, {
        toValue: {
          x: Math.floor(Math.random() * 300) + 1,
          y: Math.floor(Math.random() * 600) + 1,
        },
        useNativeDriver: true,
      }),
      Animated.timing(location3, {
        toValue: {
          x: Math.floor(Math.random() * 300) + 1,
          y: Math.floor(Math.random() * 600) + 1,
        },
        useNativeDriver: true,
      }),
    ]).start();
  }

  return (
    <View style={styles.container}>
      <Animated.View
        onStartShouldSetResponder={() => true}
        onResponderGrant={onPress}
        style={[
          styles.box,
          {
            transform: [{ translateX: location1.x }, { translateY: location1.y }],
          },
        ]}
      >
        <Text style={{ fontSize: 80 }}>🐀 </Text>
      </Animated.View>
      <Animated.View
        onStartShouldSetResponder={() => true}
        onResponderGrant={onPress}
        style={[
          styles.box,
          {
            transform: [{ translateX: location2.x }, { translateY: location2.y }],
          },
        ]}
      >
        <Text style={{ fontSize: 80 }}>🐀 </Text>
      </Animated.View>
      <Animated.View
        onStartShouldSetResponder={() => true}
        onResponderGrant={onPress}
        style={[
          styles.box,
          {
            transform: [{ translateX: location3.x }, { translateY: location3.y }],
          },
        ]}
      >
        <Text style={{ fontSize: 80 }}>🐀 </Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{ translateX: location.x }, { translateY: location.y }],
          },
        ]}
      >
        <Text style={{ fontSize: 80 }}>🐈</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 28,
  },
  box: {
    position: "absolute",
    resizeMode: "center",

    width: 100,
    height: 100,

    borderRadius: 10,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});