import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState ,useEffect} from 'react';
import Action from './components/action';
import List from './components/list';

export default function App() {
  const [id, setId] = useState(1)
  const [data, setData] = useState([{
    id: 1,
    title: "Sach thieu nhi"
  }])
  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <View style={{
      padding: 20,
      paddingTop: 50,
      flexDirection: 'column',
      justifyContent: 'center'

    }}>
      <Action data={data} setData={setData} id={id} setId={setId}/>
      <List data={data} setData={setData}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
