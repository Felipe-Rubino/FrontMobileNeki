import {View, Text, TouchableOpacity, Image, Modal, TextInput, ScrollView, Alert} from 'react-native';
import { useEffect, useState} from 'react';
import {styles} from './style';
import { listaSkill, skillPut } from '../../Service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Skill({navigation}) {
  const [isVisible, setIsVisible] = useState(false)
  const [skills, setSkills] = useState([])
  const [selectedSkill, setSelectedSkill] = useState();
  const [levelSkill, setLevelSkill] = useState("");
  function onClickSkill(skill){
    setSelectedSkill(skill);
    setIsVisible(true)
  }
  
  const openModal = () => {
    setIsVisible(true)
  }

  const closeModal = () => {
    setIsVisible(false)
  }
  useEffect(() => {
    async function fetchSkills(){
      const response = await listaSkill();
      setSkills(response.data)
    }
    fetchSkills();
  }, [])

  const fetchSkillUsuario = async () => {
    const usuarioId = parseInt(await AsyncStorage.getItem("loggedUserId"));
    const id = selectedSkill.skillId;
    try{
      const response = await skillPut(id, usuarioId, levelSkill);
      if(response){
        Alert.alert("Cadastrado com sucesso")
        setTimeout(() =>{
            closeModal()
        }, 1000)
      }
      console.log(response)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <ScrollView>
    <View style={styles.containerprincipal}>
      <Text style={styles.tituloSkill}> Escolha alguma skill!</Text>
          <Modal visible={isVisible} animationType='slide' style={styles.modal}>
          <Text style={styles.titulomodal}> CADASTRE AQUI SUA SKILL! </Text>
              <View style={styles.modalskill}>
                <Text style={styles.perguntamodal}> Qual seu nível em {selectedSkill?.nomeSkill} de 1-5 </Text>
                <TextInput  style={styles.inputlevel} placeholder="Level Skill" keyboardType='numeric' value={levelSkill} onChangeText={(texto) => setLevelSkill(texto)} />
                <TouchableOpacity style={styles.botao} onPress={fetchSkillUsuario} >
                  <Text style={styles.botaotext}> Cadastrar </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={closeModal} >
                  <Text style={styles.botaotext}> Fechar </Text>
                </TouchableOpacity>
              </View>
          </Modal>
      
      <View style={styles.containerskill}>
          {skills.map((s) => {
            return(
              <TouchableOpacity onPress={() => onClickSkill(s)} key={s.skillId}>
                <Text style={styles.nomeSkill}>{s.nomeSkill}</Text>
                <Image
                  style={{width:140, height:130, resizeMode: 'contain'}}
                  source={{uri: `data:image/png;base64, ${s.imagem.dados}`}}
                />
              </TouchableOpacity>
            )
          })}
      </View>
    </View>
    </ScrollView>
  );
}
export default Skill;
