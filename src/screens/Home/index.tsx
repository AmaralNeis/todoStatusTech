import { Text, View,  Image, TextInput, TouchableOpacity, Button, FlatList, Alert} from "react-native";
import { styles } from "./styles"
import { useState } from "react";
import AddButon from "../../components/AddButton";
import EmptyList from "../../components/EmptyList";
import { TaskModel } from "../../model/TaskModel";
import { TaskItem } from "../../components/TaskItem";


export default function Home() {
    const[isFocused, setIsFocused] = useState(false)
    const[taskDescription, setTaskDescription] = useState("")
    const[tasks, setTask] = useState<TaskModel[]>([])

    const handleFocus = () => {
        setIsFocused(true)
    }
    
    const handleBlur = () => {
        setIsFocused(false)
    }

    function handleAddTask() {        
        setTask(prevState => [...prevState, new TaskModel(taskDescription, false)])
        setTaskDescription("")        
    }

    function handleRemove(id: string){
                
        Alert.alert(
            "Remover", 
            "Deseja realmente remover este item?",
            [
                {
                    text: "Sim",
                    onPress: () => setTask(preState => preState.filter(item => item.id != id)),
                    style: "destructive"                    
                },

                {
                    text: "Não",
                    style: "cancel"
                }
            ]
        )

    }
    
    function handleUpdateStatus(id: string){
        const updateTasks = [...tasks]
        const index = updateTasks.findIndex(t => t.id == id)
        
        if(index != -1) {
            updateTasks[index].isDone = !updateTasks[index].isDone
            setTask(updateTasks)
        }
    }

    function getTasksDoneCount() {
        return tasks.filter( t => t.isDone).length
    }

    function getAllTasksCount() {
        return tasks.length
    }

    return(
        <>
        <View style={styles.containerTop}>
            <Image
                style= {styles.image}
                source={require('../../../assets/logo.png')}
            />            
                        
        </View>
        <View style={styles.containerBottom}>

            <View style={styles.form} >        
                <TextInput             
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={"#808080"}
                    onBlur={handleBlur}
                    onFocus={handleFocus} 
                    onChangeText={setTaskDescription}                        
                    value={taskDescription}
                    style={[
                        styles.input, 
                        isFocused ? styles.inputFocused : null
                    ]}            
                />    
                <TouchableOpacity onPress={handleAddTask}>
                    <AddButon/>
                </TouchableOpacity>     
            </View>

            <View style={styles.containerCounter}>
                <View style={styles.containerToDo}>
                    <Text style={styles.textToDo}>Criadas</Text>
                    <View style={styles.containerTextCount}>
                        <Text style={styles.textCount}>{`${getAllTasksCount()}`}</Text>
                    </View>
                </View>
                <View style={styles.containerDone}>
                    <Text style={styles.textDone}>Concluídas</Text>
                    <View style={styles.containerTextCount}>
                        <Text style={styles.textCount}>{`${getTasksDoneCount()}`}</Text>
                    </View>                    
                </View>                                       
            </View>

            <FlatList
                style = {styles.containerList}
                data={tasks }
                keyExtractor={ item => item.id }
                ListEmptyComponent={() => (
                    <EmptyList/>
                )}
                renderItem={({item}) => (
                    <TaskItem 
                        key={item.id}
                        item={item}
                        onRemove={() => handleRemove(item.id)}
                        onChangeStatus={() => handleUpdateStatus(item.id)}
                    />
                )
            }
            />        
        </View>        
        </>
    )
}