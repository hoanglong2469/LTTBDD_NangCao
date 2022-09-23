import React from 'react';
import { StyleSheet, Text, SafeAreaView,View,Image,TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.containerHeaderTop}>
          <View style={styles.containerHeaderTop_Left}>
            <Image style={styles.image} source = {require('./assets/book.png')}/>
          </View>
          <View style={styles.containerHeaderTop_Right}>
            <Text style ={{fontSize:16,fontWeight:'bold',marginBottom:10,}}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style ={{fontSize:14,fontWeight:'bold',marginBottom:10,}}>Cung cấp bởi Tiki Trading</Text>
            <Text style ={{fontSize:20,fontWeight:'bold',marginBottom:10,color:'red'}}>141.800 đ</Text>
            <Text style ={{fontSize:15,fontWeight:'bold',marginBottom:10,color:'grey',textDecorationLine:'line-through'}}>141.800 đ</Text>
            <View style ={styles.containerHeaderTop_Right_Row1}>
              <View style ={styles.containerHeaderTop_Right_Button}>
                  <TouchableOpacity  style={styles.button}>
                      <Text>-</Text>
                  </TouchableOpacity>
                  <Text style={{marginRight:12,textAlign:'center',}}> 1</Text>
                  <TouchableOpacity  style={styles.button}>
                      <Text>+</Text>
                  </TouchableOpacity>
              </View>
              <View style ={styles.containerHeaderTop_Right_Text}>
                  <Text style={{color:'blue',fontSize:16,fontWeight:'bold'}}>Mua sau</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerHeaderBottom}>
            <View style={styles.containerHeaderBottom_Top}>
                  <Text style={{color:'black',fontSize:16,fontWeight:'bold',marginRight:10,}}>Mã giảm giá đã lưu</Text>
                  <Text style={{color:'blue',fontSize:16,fontWeight:'bold'}}>Xem tại đây</Text>
            </View>
            <View style={styles.containerHeaderBottom_Bottom}>
                <TouchableOpacity style={styles.couple}>
                    <View style={{display:'flex',flexDirection:'row',alignItems:'center',}}>
                      <View style={{height:20,width:50,backgroundColor:'#FFCC00',marginRight:10,marginLeft:20,}}></View>
                      <Text style={{fontSize:16,fontWeight:'bold'}}>Mã giảm giá</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.apply}>
                    <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Áp dụng</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.containerLine}>
        </View>
        <View style={styles.containerMiddle}>
            <Text style={{color:'black',fontSize:14,fontWeight:'bold',marginRight:20,}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
            <Text style={{color:'blue',fontSize:14,fontWeight:'bold'}}>Nhập tại đây?</Text>
        </View>
        <View style={styles.containerLine}>
        </View>
        <View style={styles.containerMiddleBotton}>
            <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>Tạm Tính</Text>
            <Text style ={{fontSize:20,fontWeight:'bold',marginBottom:10,color:'red'}}>141.800 đ</Text>
        </View>
        <View style={styles.containerLineBig}>
        </View>
        <View style={styles.containerButtom}>
          <View style={styles.containerButtom_Top}>
            <Text style={{color:'grey',fontSize:20,fontWeight:'bold'}}>Thành tiền</Text>
            <Text style ={{fontSize:22,fontWeight:'bold',marginBottom:10,color:'red'}}></Text>
          </View>
          <TouchableOpacity style={styles.order}>
                    <Text style={{color:'white',fontSize:22,fontWeight:'bold'}}>TIẾN HÀNH ĐẶT HÀNG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    height:"100%",
    width:"100%",
  },
  containerHeaderTop:{
    width:"100%",
    height:"40%",
    display:'flex',
    flexDirection:'row',
    paddingLeft:10,
    paddingRight:10,
  },
  containerHeader:{
    display:'flex',
    flexDirection:'column',
    height:"50%",
    width:"100%",
  },
  containerHeaderTop_Left:{
    width:"30%",
    marginRight:10,
  },
  containerHeaderTop_Right:{
    width:"80%",
    display:'flex',
    flexDirection:'column',
  },
  containerHeaderTop_Right_Button:{
    alignItems:'center',
    display:'flex',
    flexDirection:'row',

  },
  button:{
    backgroundColor:'grey',
    borderWidth: 1,
    justifyContent:'center',
    borderColor: 'black',
    width:20,
    height:20,
    alignItems:'center',
    marginRight:10,
  },
  containerHeaderTop_Right_Row1:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:20,
  },
  containerHeaderBottom:{
    paddingLeft:10,
    paddingRight:10,
  },
  containerHeaderTop_Right_Text:{
    paddingRight:50,
  },
  containerHeaderBottom_Top:{
    display:'flex',
    flexDirection:'row',
    marginBottom:20,
  },
  containerHeaderBottom_Bottom:{
    display:'flex',
    flexDirection:'row',
    marginBottom:20,
    justifyContent:'space-between',
  },
  couple:{
    backgroundColor:'#fff',
    borderWidth: 1,
    borderColor: 'black',
    width:250,
    height:40,
    justifyContent:'center',
    marginRight:10,
  },
  apply:{
    width:120,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#3366FF',
  },
  containerLine:{
    height:15,
    width:"100%",
    backgroundColor:'#DDDDDD',
    marginBottom:10,
  },
  containerMiddle:{
    paddingRight:10,
    paddingLeft:10,
    display:'flex',
    flexDirection:'row',
    paddingBottom:15,
  },
  containerMiddleBotton:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:10,
    paddingLeft:10,
  },
  containerLineBig:{
    height:200,
    width:"100%",
    backgroundColor:'#DDDDDD',
    marginBottom:20,
  },
  containerButtom_Top:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  containerButtom:{
    paddingLeft:10,
    paddingRight:10,
  },
  order:{
    marginTop:20,
    height:50,
    width:"100%",
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
  },
  image:{
    height:140,
  }
});

export default App;