import { useState } from "react"
import { StyleSheet,Button, TextInput, View } from "react-native"

export default Action = (props) => {
    const [newValue, setNewValue] = useState("")

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20
          }}>
            
            <TextInput style={{
              borderWidth: 1,
              height: 40,
              flex: 1,
              marginRight: 10,
              padding: 10,
              fontSize:20,
            }}
            value={newValue}
            onChangeText={(value) => setNewValue(value)
            }
            placeholder="Nhập tên ngôn ngữ lập trình"/>
            
            <Button title='Thêm' onPress={() => {
                props.setData([...props.data, {id: props.id+1, title: newValue}])
                setNewValue("")
                props.setId(props.id+1)
            }}/>
          </View>
    )
}
