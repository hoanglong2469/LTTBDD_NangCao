import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

export default function Bai2() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 500,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Animated.View style={{ marginTop: fadeAnim }}>
        <Text style={{ fontSize: 100 }}>🚁</Text>
      </Animated.View>
    </View>
  );
}