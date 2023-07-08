import React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles"
import { TaskModel } from "../../model/TaskModel";


interface TaskModelProps {
    item: TaskModel;
    onChangeStatus: () => void
    onRemove: () => void
}

export function TaskItem( {item, onChangeStatus, onRemove}: TaskModelProps ) {
    let imageSource = require("../../../assets/check.png")

    if (item.isDone) {
      imageSource = require("../../../assets/checkDone.png")
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity  style={styles.check} onPress={onChangeStatus}>
                <Image source={imageSource}/>                                
            </TouchableOpacity>

            <Text 
             style={[
                styles.text, 
                item.isDone ? styles.textDone : null
            ]}>
                    {item.description}
            </Text>

            <TouchableOpacity  style={styles.delete} onPress={onRemove}>
                <Image source={require("../../../assets/trash.png")}/>
            </TouchableOpacity>
        </View>
    )
}