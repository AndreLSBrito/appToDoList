import React, {useState} from 'react'
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import { PlusCircle, Notepad } from "phosphor-react-native";
import { Task } from "../../components/Task";


export function Home(){
  

  const [tasks,setTasks] = useState([])
  const [newTask,setNewTask] = useState('')
  

  function handleTaskAdd(taskToAdd){
    const task = {
      id: tasks.length + 1, 
      content: taskToAdd, 
      completed: false
    }
    setTasks(prevState => [...prevState,task])
  }

  function handleRemoveTask(){

  }

 

  return(
    <View >
      <Header/>
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder="Adicione uma nova tarefa"
          onChangeText={setNewTask}
          value={newTask}
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleTaskAdd(newTask)}  
        >
          
          <PlusCircle weight="thin"/>
        
        </TouchableOpacity>
      </View>
      <View style={{width:350, height:19, justifyContent:"space-between",flexDirection:'row', marginTop: 59, marginHorizontal: 16}}>
        <View style={{flexDirection:'row'}}>
          <Text style={{color:'#4EA8DE', marginHorizontal: 9, height: 17, fontSize: 14}}>Criadas:</Text>
          <Text 
            style={{paddingHorizontal: 4, height:19, backgroundColor: '#333333', borderRadius: 999, alignItems: "center"}}
          >
            999999
          </Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <Text style={{color:'#8284FA', marginRight: 8, height: 17, fontSize: 14}}>Concluídas:</Text>
          <Text 
            style={{paddingHorizontal: 4, height:19, backgroundColor: '#333333', borderRadius: 999, alignItems: "center"}}
          >
            0
          </Text>
        </View>
      </View>

     
      <FlatList 
      style={{marginTop: 20}}
        keyExtractor={ (item) => item.id.toString()}
        data={tasks}
        renderItem={({item}) => ( 
          <View style={{flex: 1, paddingLeft:24}}>
            <Task
              id={item.id}
              content={item.content}
              completed={item.completed}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <View style={{ paddingHorizontal:20,paddingVertical:48,marginHorizontal:24, alignItems:"center", borderTopWidth: 1, borderTopColor:'gray'}}>
            <Notepad
            size={56}
            />
            <Text style={{fontWeight:'700', lineHeight: 20, textAlign:"center", marginTop: 16}}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={{fontWeight:'400', lineHeight: 20, textAlign:"center"}}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />

    </View>
    
  )
}