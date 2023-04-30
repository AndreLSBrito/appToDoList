import{ styles} from './styles'
import { Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import {Trash, Check} from 'phosphor-react-native'
import {Feather} from '@expo/vector-icons'




interface TaskProps{
  id: number;
  content: string;
  completed: boolean;
}

export function Task({id, content, completed}:TaskProps){

  function handleRemoveTask(){
    console.log()    
  }


  return(
    <View style={styles.task}>
      <TouchableOpacity
        style={styles.checkboxRoot}
        activeOpacity={0.7}
      > 
        { 
          completed 
          ?
          <Feather 
            name="check"
            style={styles.iconCheck}
            size={22}
            color='#262626'
          /> 
          :
          <View style={styles.checkboxIndicator}/>
        }

        <Text style={{color:'white', width: 235}}>
          {content}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={handleRemoveTask}
      >
        <Trash style={styles.iconTrash} color='#E25858'/>
      </TouchableOpacity>
      
    </View>
 
  );
}
