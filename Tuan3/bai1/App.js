import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { Stack, Button } from "@react-native-material/core";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.row1}>
                <Image source={require("./assets/circle.png")} />
            </View>
            <View style={styles.row2}>
                <Text style={styles.text1}>GROW YOUR BUSSINESS</Text>
            </View>
            <View style={styles.row3}>
                <Text style={styles.text2}>
                    We will help you to grow your business using online server
                </Text>
            </View>
            <View style={styles.row4}>
              <View style={styles.btn1}>
                <Button title="Login" />
              </View>
              <View style={styles.btn2}>
                <Button title="Register" />
              </View>
            </View>
            <View style={styles.row5}>
                <Text style={styles.text3}>HOW WE WORK</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#28F7AC",
        alignItems: "center",
        justifyContent: "center",
        padding:10,
        color:"white",
    },
    row1:{
    },
    row2:{
      marginTop:30,
    },
    row3:{
      marginTop:30,
    },
    row4:{
      marginTop:30,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'
    },
    row5:{
      marginTop:30,
    },
    text1:{
      color:"white",
    },
    text2:{
      color:"white",
      textAlign:"center",
      
    },
    text3:{
      color:"white",
    },
    btn1:{
      marginRight:10,
      width: 100,
    }
});
