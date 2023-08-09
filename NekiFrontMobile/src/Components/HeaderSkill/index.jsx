import {View, Text, TouchableOpacity} from 'react-native';
import {} from 'react';
import {styles} from './style';
import { useNavigation } from '@react-navigation/native';

function CadastroSkill() {
  const navigation = useNavigation();
  return (
    <View style={styles.headerSkill}>
      <TouchableOpacity onPress={() => navigation.navigate('Skill')}>
        <Text style={styles.skill} >Skill</Text>
      </TouchableOpacity>
    </View>
  );
}
export default CadastroSkill;
