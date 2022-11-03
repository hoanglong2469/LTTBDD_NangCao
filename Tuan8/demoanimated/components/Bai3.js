import { View, Text, Animated, Button, TouchableOpacity } from "react-native";
import React, { useRef } from "react";

export default function Bai3() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  function start() {
    Animated.timing(fadeAnim, {
      toValue: 320,
      duration: 7000,
      useNativeDriver: false,
    }).start();
  }
  function stop() {
    Animated.timing(fadeAnim).stop();
  }
  function reset() {
    Animated.timing(fadeAnim).reset();
  }
  return (
    <View>
      <Animated.View style={{ marginLeft: fadeAnim }}>
        <Text style={{ fontSize: 40 }}>🚣</Text>
      </Animated.View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 480,
        }}
      >
        <TouchableOpacity
          style={{
            padding: 20,
            backgroundColor: "blue",
            borderRadius: 50,
          }}
          onPress={start}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
            Start
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={stop}
          style={{ padding: 20, backgroundColor: "blue", borderRadius: 50 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
            Stop
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={reset}
          style={{ padding: 20, backgroundColor: "blue", borderRadius: 50 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}