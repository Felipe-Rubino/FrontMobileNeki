import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from '../../Context/authContext';
import {styles} from './style';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
  Alert,
} from 'react-native';
import {useState, useEffect, useCallback} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {atualizarId, deleteSkill, deleteUsuarioId} from '../../Service/api';
import {useFocusEffect} from '@react-navigation/native';
export default function Home() {
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState();
  const [levelSkill, setLevelSkill] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  
  function onClickSkill(skill) {
    setSelectedSkill(skill);
    console.log(skill)
    setIsVisible(true);
  }

  const closeModal = () => {
    setIsVisible(false);
    setLevelSkill('')
  };

  const fetchNivelSkill = async (skillId) => {
    const usuarioId = await AsyncStorage.getItem('loggedUserId');
    console.log(usuarioId)
    const id = skillId
    console.log(id)
    try {
      const response = await atualizarId(id, levelSkill, usuarioId);
      if(response){
        Alert.alert("", "Seu nível foi atualizado com sucesso")
        setTimeout(() =>{
            closeModal()
        },1000)
      }
      fetchSkill();
    } catch (error) {
      console.log('Erro ao atualizar', error);
    }
  };

  const fetchSkill = async () => {
    const usuarioId = await AsyncStorage.getItem('loggedUserId');
    try {
      const response = await fetch(
        `http://10.0.2.2:8080/api/skill/${usuarioId}/skillUsuario`,
      );
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        setSkills(data);
      } else {
        setSkills([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchSkill();
    }, []),
  );

  const fetchDeleteUsuarioId = async (skillId) => {
    const usuarioId = await AsyncStorage.getItem('loggedUserId');
    const id = skillId;
    try {
      const response = await deleteUsuarioId(usuarioId, id);
      fetchSkill();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <View style={styles.containertitulo}>
          <Text style={styles.titulo}>ESSAS SÃO SUAS SKILLS</Text>
        </View>
        <Modal visible={isVisible} animationType="slide" style={styles.modal}>
          <Text style={styles.titulomodal}>
            {' '}
            Atualize seu level nessa skill{' '}
          </Text>
          <View style={styles.modalskill}>
            <Text style={styles.perguntamodal}>
              {' '}
              Atualize seu nivel em {selectedSkill?.nomeSkill} de 1-5{' '}
            </Text>
            <TextInput
              style={styles.inputlevel}
              placeholder="Level Skill"
              keyboardType="numeric"
              value={levelSkill}
              onChangeText={texto => setLevelSkill(texto)}
            />
            <TouchableOpacity style={styles.botao} onPress={() =>fetchNivelSkill(selectedSkill.skillId)}>
              <Text style={styles.botaotext}> Atualizar </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={closeModal}>
              <Text style={styles.botaotext}> Fechar </Text>
            </TouchableOpacity>
          </View>
        </Modal>
        {skills.map(s => {
          return (
            <TouchableWithoutFeedback
              onPress={() => onClickSkill(s)}
              key={s.skillId}>
              <View style={styles.containerSkills}>
                <Text style={styles.nome}>{s.nomeSkill}</Text>
                <Text style={styles.descricao}>{s.descricao}</Text>
                <Text style={styles.levelSkill}>
                  Seu level nessa skill é {s.levelSkill}
                </Text>
                <View style={styles.imagem}>
                  <Image
                    style={{width: 140, height: 120, resizeMode: 'cover'}}
                    source={{uri: `data:image/png;base64, ${s.imagem.dados}`}}
                  />
                </View>
                <View style={styles.containerlixeira}>
                  <TouchableOpacity
                    onPress={() => fetchDeleteUsuarioId(s.skillId)}>
                    <Icon name="trash-can-outline" color="red" size={30} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => onClickSkill(s)}>
                    <Icon name="lead-pencil" color="#000" size={30} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </ScrollView>
  );
}
