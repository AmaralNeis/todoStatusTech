import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {        
        flex: 1,
        minHeight: 64,
        backgroundColor: "#262626",
        borderColor: "#333333",
        borderRadius: 8,
        borderWidth: 1,
        marginTop: 16,
        padding: 16, 
        flexDirection: "row",
        alignItems: "center"            
    },

    text: {
        flex: 1,
        color: "#F2F2F2",
        textAlign: "center"         
    },

    textDone: {
        color: "#808080",
        textDecorationLine: "line-through"        
    },

    check: {
        width: 24,
        height: 24        
    },

    delete: {        
        width: 24,
        height: 24
    }
})