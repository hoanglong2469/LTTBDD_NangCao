import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [input, setInput] = useState('')
  const [settext, setSettext] = useState('')
  const onPressLearnMore = ()=>{
    setSettext(input);
  }
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TextInput
                style={styles.textInput}
                placeholder="Input text"
                onChangeText={input => setInput(input)}
            ></TextInput>
            <Button style={styles.button}
                onPress={onPressLearnMore}
                title="Show"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Text>{settext}</Text>
        </View>
    );
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#000",
        width: 200,
        height: 40,
    },
    button:{
      padding:10,
    }
});
