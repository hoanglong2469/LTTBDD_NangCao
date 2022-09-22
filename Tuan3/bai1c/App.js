import * as React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
            <View style={styles.row1}>
                <Text style={styles.text0}>CODE</Text>
            </View>
            <View style={styles.row2}>
                <Text style={styles.text1}>VERIFICATION</Text>
            </View>
            <View style={styles.row3}>
                <Text style={styles.text2}>
                  Enter ontime password sent on ++849092605798
                </Text>
            </View>
            <View style={styles.row4}>
              <View style={styles.item_block}></View>
              <View style={styles.item_block}></View>
              <View style={styles.item_block}></View>
              <View style={styles.item_block}></View>
              <View style={styles.item_block}></View>
            </View>
            <View style={styles.row5}>
              <Button variant="outlined" title="VERIFY CODE" color="black"/>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#C7F4F6',
    
    padding: 8,
    height:1000,
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
    backgroundColor: '#E3C000',
    width:400,
  },
  text1:{
    fontWeight:"bold",
  },
  text2:{
    textAlign:"center",
    fontWeight:"bold",
  },
  text3:{
    fontWeight:"bold",
  },
  btn1:{
    marginRight:10,
    width: 100,
  },
  text0:{
    fontWeight:"bold",
    fontSize:60,
  },
  item_block:{
    width: 50,
    borderWidth:1,
    height: 50,
  }
});
