import React, {useState} from 'react'
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";
import { PlusCircle, Notepad, Trash } from "phosphor-react-native";
import {Feather} from '@expo/vector-icons'



export function Home(){
  

  const [tasks,setTasks] = useState([])
  const [newTask,setNewTask] = useState('')
  

  function handleTaskAdd( content:string) {
    setNewTask('');
  
    if (content.trim() === '' || content == null || content ==undefined) {
      Alert.alert('Ops..', 'Você se esqueceu de nomear sua tarefa');
      return;
    }
  
    const lastId = tasks?.reduce((maxId, task) => Math.max(task.id, maxId), 0) ?? 0;
    const id = lastId + 1;
    const task = { id, content, completed: false };
  
    setTasks(prevState => [...prevState, task]);
  }
 
  function handleRemoveTask(id, content){
    Alert.alert('Remover tarefa',`Tem certeza que deseja remover "${content}" de sua lista de tarefas?`,[
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => tasks.filter((task) => task.id !== id))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleTaskToggle(id,checked){
    const taskIndex = tasks.findIndex((task)=> task.id === id)
    tasks[taskIndex].completed = !checked 
    setTasks([...tasks])
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
            {tasks.length}
          </Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <Text style={{color:'#8284FA', marginRight: 8, height: 17, fontSize: 14}}>Concluídas:</Text>
          <Text 
            style={{paddingHorizontal: 4, height:19, backgroundColor: '#333333', borderRadius: 999, alignItems: "center"}}
          >
            {tasks.filter((task) => task.completed === true).length}
          </Text>
        </View>
      </View>

     
      <FlatList 
        style={{marginTop: 20}}
        keyExtractor={ (item) => item.id.toString()}
        data={tasks}
        renderItem={({item}) => ( 
          <View style={{flex: 1, paddingLeft:24}}>
            {/* <Task
              id={item.id}
              content={item.content}
              completed={item.completed}
            /> */}
            <View style={styles.task}>
              <TouchableOpacity
                style={styles.checkboxRoot}
                activeOpacity={0.7}
                onPress={() => handleTaskToggle(item.id,item.completed)}
              > 
                { 
                  item.completed 
                  ?
                  <Feather 
                    name="check"
                    style={styles.iconCheck}
                    size={22}
                    color="white"
                  /> 
                  :
                  <View style={styles.checkboxIndicator}/>
                }

                <Text style={{color:'white', width: 235}}>
                  {item.content}
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={() => handleRemoveTask(item.id, item.content)}
              >
                <Trash style={styles.iconTrash} color='#E25858'/>
              </TouchableOpacity>
              
            </View>
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