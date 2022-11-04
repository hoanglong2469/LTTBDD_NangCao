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

    return (
        <View>
            <Button title="Bai1" onPress={hanldPressBai1}/>
            <Button title="Bai2" onPress={hanldPressBai2}/>
            <Button title="Bai3" onPress={hanldPressBai3}/>
        </View>
    );
  

}