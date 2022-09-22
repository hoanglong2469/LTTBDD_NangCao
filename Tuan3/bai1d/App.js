import * as React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View,  } from "react-native";
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.main}>
        <View style={styles.section}>
            <Text style={styles.textLogo}>LOGIN</Text>
        </View>
        <View style={{flex: 1}}>
            <TextInput style={styles.textEmail} placeholder="Email"/>
            <View style={styles.password}>
                <TextInput style={styles.textPassword} placeholder="Password"/>
                <Image style={styles.imgEye} source={require("./assets/eye.png")}/>
            </View>
        </View>
        <View style={{flex: 0.2}}>
            <Button title="Login" color={'#E53935'}/>
        </View>
        <View style={styles.section}>
            <Text style={{marginBottom: 10, fontSize: 14}}>When you agree to terms and conditions</Text>
            <Text style={{marginBottom: 10, color: '#5D25FA'}}>For got your password?</Text>
            <Text style={{fontSize: 14}}>Or login with</Text>
        </View>
        <View style={{flex:1, flexDirection: 'row', alignItems: "center"}}>
            <View style={{
                flex: 1, 
                alignItems: "center", 
                borderWidth: 1,
                borderColor: "#1976d2", 
                paddingVertical: 10, 
                borderRadius: 10}}>
                <Image source={require("./assets/facebook.png")} style={{
                    width: 40,
                    height: 40, 
                    resizeMode: 'stretch'}} />
            </View>
            <View style={{
                flex: 1, 
                alignItems: "center", 
                borderWidth: 1,
                borderColor: "#1976d2", 
                paddingVertical: 10, 
                borderRadius: 10}}>
                <Image source={require("./assets/zalo.png")} style={{
                    width: 40,
                    height: 40, 
                    resizeMode: 'stretch'}} />
            </View>
            <View style={{
                flex: 1, 
                alignItems: "center", 
                borderWidth: 1,
                borderColor: "#1976d2", 
                paddingVertical: 10, 
                borderRadius: 10}}>
                <Image source={require("./assets/google.png")} style={{
                    width: 40,
                    height: 40, 
                    resizeMode: 'stretch'}} />
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
  main: {
      flex: 1,
      padding: 15,
      backgroundColor: "rgba(49, 170, 82, 0.19)"
  },
  section: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  textLogo: {
      fontSize: 25,
      fontWeight: "bold"
  },
  textEmail: {
      backgroundColor: "rgba(196, 196, 196, 0.3);",
      padding: 16,
      marginBottom: 40
  },
  password: {
      flexDirection: "row",
      backgroundColor: "rgba(196, 196, 196, 0.3);",
      alignItems: "center"
  },
  textPassword: {
      width: "85%",
      padding: 16,
  },
  imgEye: {
      width: 36,
      height: 36,
      resizeMode: "stretch"
  }
});