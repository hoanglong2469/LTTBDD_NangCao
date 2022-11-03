import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

export default function Bai1() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text
          style={{
            fontSize: 23,
          }}
        >
          Welcome to Animation React Native
        </Text>
      </Animated.View>
    </View>
  );
}