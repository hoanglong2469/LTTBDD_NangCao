import { FlatList } from "react-native"
import Item from "./item"

export default List = (props) => {
    const onDelete = (item) => {
        console.log(item)
        const tmpArr = [...props.data]
        var index = tmpArr.indexOf(item);
        if (index !== -1) {
            tmpArr.splice(index, 1);
        }
        props.setData(tmpArr)
    }

    return (
            <FlatList 
                data={props.data}
                renderItem={({item}) => {
                    return <Item item={item} onDelete={() => onDelete(item)}/>
                }}
            />  
    )
}