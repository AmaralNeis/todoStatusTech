import { Image, View } from "react-native";
import { styles } from "./styles"

export default function AddButon() {

    return(
       <View style={styles.container}>
        <Image 
            style={styles.image}
            source={require('../../../assets/plus.png')}
        />
       </View>
    )
}