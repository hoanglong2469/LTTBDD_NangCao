import { Button, Text, View } from "react-native"

export default Item = (props) => {
    return (
        <View style={{
            backgroundColor: '#ECECEC',
            padding: 10,
            marginBottom: 2,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <Text style={{
                fontWeight: '500'
            }}>{props.item.title}</Text>

            <Button title="Xóa" onPress={() => props.onDelete(props.item)}/>
        </View>
    )
}