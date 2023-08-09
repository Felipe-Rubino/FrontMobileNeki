import { View, Text, TouchableOpacity } from 'react-native'
import { useContext } from 'react'
import {styles} from './style';
import { AuthContext } from '../../Context/authContext';

function BotaoLogout() {
    const context = useContext(AuthContext);
    
    function handleLogout(){
        context.logout()
        
    }
  return (
    <View style={styles.logout}>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.sair}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}
export default BotaoLogout;