import { Button, View} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home(props) {

    const navigation = useNavigation();

    const hanldPressBai1 = () => {
        navigation.navigate("Bai1");
    };
    const hanldPressBai2 = () => {
        navigation.navigate("Bai2");
    };
    const hanldPressBai3 = () => {
        navigation.navigate("Bai3");
    };
    const hanldPressBai4 = () => {
        navigation.navigate("Bai4");
    };

    return (
        <View>
            <Button title="Bai1" onPress={hanldPressBai1}/>
            <Button title="Bai2" onPress={hanldPressBai2}/>
            <Button title="Bai3" onPress={hanldPressBai3}/>
            <Button title="Bai4" onPress={hanldPressBai4}/>
            <Button title="Bai5" onPress={hanldPressBai3}/>
            <Button title="Bai6" onPress={hanldPressBai3}/>
            <Button title="Bai7" onPress={hanldPressBai3}/>
        </View>
    );
  

}