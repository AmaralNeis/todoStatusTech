import { Image, View, Text } from "react-native";
import { styles } from "./styles";


export default function EmptyList() {
    return(
        <>
            <View style={styles.line}/>
            <View style={styles.container}>
                <Image
                    source={require("../../../assets/clipboard.png")}
                />
                <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.subTitle}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
        </>
    )
}