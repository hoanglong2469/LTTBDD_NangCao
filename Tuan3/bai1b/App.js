import * as React from 'react';
import { Text, View, StyleSheet,Image,TextInput,Button} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.row1}>
          <Image source ={require("./assets/lock.png")}></Image>
        </View>
        <View style={styles.row2}>
          <Text style={styles.text1}>FORGET PASSWORD</Text>
        </View>
        <View style={styles.row3}>
          <Text style={styles.text2}>Provide your account’s email for which you want to reset your password</Text>
        </View>
        <View style={styles.row4}>
        <TextInput style = {styles.input} placeholder = "Email"/>
            
        </View>
        <View style={styles.row5}>
        <Button style={styles.btn1} variant="outlined" title="Next" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: "#BDF6C6",
    alignItems: "center",
    justifyContent: "center",
    height:1000,
  },
  row1:{
    marginTop: 50,
  },
  row2:{
    marginTop: 50,
  },
  row3:{
    marginTop: 100,
  },
  row4:{
    marginTop: 100,
    width:400,
    height:50,
    backgroundColor: "#C4C4C4",
  },
  row5:{
    marginTop: 50,
    width:400,
    height:50,
    backgroundColor: "#E3C000",
  },
  text1:{
    textAlign: "center",
    fontSize: 20,
    fontWeight:"bold",
  },
  text2:{
    textAlign: "center",
    fontSize: 20,
    fontWeight:"bold",
  },
  btn1:{
    marginRight:10,
    width: 100,
  },
  input: {
    margin: 0,
    height: 50,
    borderColor: '#7a42f4',
    borderWidth: 3,
 },
});
