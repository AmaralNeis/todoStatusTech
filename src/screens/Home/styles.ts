import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerTop: {
        flex: 0.2,
        backgroundColor: "#0D0D0D",
        padding: 16,
        alignItems: 'center'                      
    }, 

    containerBottom: {
        flex: 1,
        backgroundColor: "#1A1A1A",        
        alignItems: 'center',
        padding: 16,  
                           
    }, 

    title: {
        color: "#808080"
    }, 

    containerCounter: {
        width: "100%",
        flexDirection: "row",
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center"            
    },

    containerList: {
        width: "100%",
    },


    containerToDo: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row"
    },

    textToDo: {
        textAlign: 'left',
        color: "#4EA8DE",
        fontWeight: "700",
        marginEnd: 8
    },

    containerDone: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row"
    },

    textDone: {
        textAlign: "right",
        color: "#8284FA",
        fontWeight: "700",
        marginEnd: 8
    },

    textCount: {
        color: "#D9D9D9",        
        fontWeight: "700",
        textAlign: "center",        
    },


    containerTextCount: {        
        backgroundColor: "#333333",
        borderRadius: 16,
        padding: 8
    },

    image: {
        marginTop: 70,                
    }, 

    form: {
        width: "100%",
        flexDirection: "row"
    },

    input: {
        height: 52,        
        flex: 1,
        color: "#F2F2F2",
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#262626",
        borderStyle: "solid",        
        backgroundColor: "#262626",
        paddingStart: 16, 
        paddingEnd: 8,
        marginEnd: 4,        
        
     }, 
     
    inputFocused: {
        borderColor: "#5E60CE",
       
     }

})