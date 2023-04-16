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
            color="white"
          /> 
          :
          <View style={styles.checkboxIndicator}/>
        }

        <Text style={{color:'white', width: 235}}>
          {content}
        </Text>
      </TouchableOpacity>
      
      <Trash style={styles.iconTrash} color='#E25858'/>
    </View>
 
  );
}
