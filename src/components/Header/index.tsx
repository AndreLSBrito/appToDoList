import {Image, View} from 'react-native'
import { styles } from './styles'
import { StatusBar } from 'expo-status-bar';

export function Header(){
  return(
    <View style={styles.container}>
       <StatusBar 
        style="auto" 
        backgroundColor="transparent" 
        translucent
      />
      <Image
      style={{width:110.34, height: 32, marginBottom:40}}
        source={require('../../../assets/Logo.png')}
      />
    </View>
  )
}