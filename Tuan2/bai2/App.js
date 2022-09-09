import { StyleSheet, View, Alert } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Stack, TextInput, IconButton, Text, Button } from "@react-native-material/core";
export default function App() {
  return (
    <Stack spacing={2} style={styles.appContainer}>

    <Text variant="h4" style={{padding:25,alignSelf:'center',fontStyle:'bold'}}>LOGIN</Text>
    <TextInput
      label="Username"
      leading={props => <Icon name="account" {...props} />}
    />
    <TextInput
      label="Password"
      variant="filled"
      
      leading={props => <Icon name="lock" {...props} />}
      trailing={props => (
        <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
      )}
    />
    <Button title='Sign in' titleStyle={{fontSize:15}} uppercase={true} color="red" style={{margin:25}} variant='filled' trailing={props => <Icon name="send" {...props}/>}/>
  </Stack>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    margin:20
  },
  dummyText: {
    margin: 16, 
    padding:10, 
    borderWidth:2
  },
  appContainer: {
    padding: 50,
    margin: 20,
    marginTop:100,
    justifyContent: 'center',
    
  }, 
  inputContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputText: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    marginRight:10,
  }
});

