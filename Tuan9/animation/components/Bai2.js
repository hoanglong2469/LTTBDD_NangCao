import { StatusBar } from 'expo-status-bar';
import { useRef, useState  } from 'react';
import { Animated, StyleSheet, Text, View, Button, Image  } from 'react-native';
import icon from '../assets/chuot.png';

export default function Bai1() {
  const [location, setLocation] 
      = useState({
        x: null,
        y: null,
        marginLeft: new Animated.Value(10),
        marginTop: new Animated.Value(10)

      });

 const [location1, setLocation1] 
  = useState({
    x1: null,
    y1: null,
    marginLeft1: new Animated.Value(Math.random()),
    marginTop1: new Animated.Value(Math.random())

  });

  const [location2, setLocation2] 
  = useState({
    x2: null,
    y2: null,
    marginLeft2: new Animated.Value(Math.random()),
    marginTop2: new Animated.Value(Math.random())

  });

  const [location3, setLocation3] 
  = useState({
    x3: null,
    y3: null,
    marginLeft3: new Animated.Value(Math.random()),
    marginTop3: new Animated.Value(Math.random())

  });

  function onPress(evt){

    console.log('====================================');
    var x = evt.nativeEvent.locationX;
    console.log('====================================');
    console.log(x);
    console.log('====================================');
    var y = evt.nativeEvent.locationY;
    console.log('====================================');
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y

    })
    
    console.log('====================================');
    var x = evt.nativeEvent.locationX;
    console.log('====================================');
    console.log(x);
    console.log('====================================');
    var y = evt.nativeEvent.locationY;
    console.log('====================================');
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y

    })
    
    console.log('====================================');
    var x1 = Math.random()*200;
    console.log('====================================');
    console.log(x);
    console.log('====================================');
    var y1 = Math.random()*200;
    console.log('====================================');

    console.log('====================================');
    var x2 = Math.random()*200;
    console.log('====================================');
    console.log(x);
    console.log('====================================');
    var y2 = Math.random()*200;
    console.log('====================================');

    console.log('====================================');
    var x3 = Math.random()*200;
    console.log('====================================');
    console.log(x);
    console.log('====================================');
    var y3 = Math.random()*200;
    console.log('====================================');

    setLocation1({
    x1: x1,
    y1: y1,
    marginLeft1: x1,
    marginTop1: y1

    })

    setLocation2({
    x2: x2,
    y2: y2,
    marginLeft2: x2,
    marginTop2: y2

    })

    setLocation3({
    x3: x3,
    y3: y3,
    marginLeft3: x3,
    marginTop3: y3

    })

    
  }
  function onMove(evt){
    
    
    
    console.log('====================================');
    console.log(location1);
    console.log('====================================');

    console.log('====================================');
    console.log(location2);
    console.log('====================================');

    console.log('====================================');
    console.log(location3);
    console.log('====================================');
  
  }
  function onRelease(){
    console.log("Realse!");
  }

  const {marginTop1, marginLeft1} = location1;
  const {marginTop2, marginLeft2} = location2;
  const {marginTop3, marginLeft3} = location3;

  return (
    <View
      onStartShouldSetResponder={()=>true}
      onMoveShouldSetResponder= {()=>true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease = {onRelease}
      style={styles.container}>

      <Text>Show something!</Text>
     
      <Animated.Image
       source = {icon}
       style={{marginLeft: marginLeft1, marginTop: marginTop1}}
       >

      </Animated.Image>

      <Animated.Image
       source = {icon}
       style={{marginLeft: marginLeft2, marginTop: marginTop2}}
       >

      </Animated.Image>

      <Animated.Image
       source = {icon}
       style={{marginLeft: marginLeft3, marginTop: marginTop3}}
       >

      </Animated.Image>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
});

