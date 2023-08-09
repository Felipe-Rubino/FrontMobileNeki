import {SafeAreaView, Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {styles} from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconEye from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { create } from '../../Service/api';
const Cadastro = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [esconderSenha, setEsconderSenha] = useState(true)
  const [confirmarPassword, setConfirmarPassword] = useState('')
  const [errorMensagem, setErrorMensagem] = useState({})
  const [cadastroSucesso, setCadastroSucesso] = useState(false)
  
  const erro = {
    email: "E-mail ou senha inválido",
    password: "E-mail ou senha inválido",
    noEmail: "Por favor coloque o e-mail",
    noPassword: "Por favor coloque a senha",
    noIgualdade: "As senhas devem corresponder",
  };
  const errorMsg = (name) => {
    return (
      errorMensagem &&
      name === errorMensagem.name && (
        <Text style={styles.erromensagem}>{errorMensagem.message}</Text>
      )
    );
  };

  const validateInput = (email, password, confirmarPassword) => {
      setErrorMensagem(null)
      if(!email){
        setErrorMensagem({ name: "noEmail", message: erro.noEmail });
        setTimeout(() => {
          setErrorMensagem(null)
        }, 2500)
        return false;
      }
      if (password !== confirmarPassword) {
        setErrorMensagem({ name: "noIgualdade", message: erro.noIgualdade });
        setTimeout(() => {
          setErrorMensagem(null);
        }, 3000);
        return false;
      }
      if (!password) {
        setErrorMensagem({ name: "noPassword", message: erro.noPassword });
        setTimeout(() => {
          setErrorMensagem(null);
        }, 3000);
        return false;
      }
      if (!confirmarPassword) {
        setErrorMensagem({ name: "noPassword", message: erro.noPassword });
        setTimeout(() => {
          setErrorMensagem(null);
        }, 3000);
        return false;
      }
      return true;
    };
  

  const handleRegister = async () => {
    setErrorMensagem(null)
    if(validateInput(email,password,confirmarPassword)){
      try{  
        const response = await create(email, password);
        if (response){
          Alert.alert("", "Cadastro concluido com sucesso")
          setTimeout(() => {
            navigation.navigate('Login')
          }, 3000)
        }else {
          console.log("Erro no cadastro")
        }
        return;
      }catch(error){
        setTimeout(() =>{
          setErrorMensagem(null)
        }, 3000)
      }
    }
  }

  return (
    <SafeAreaView style={styles.div}>
      <View style={styles.container}>
        <View style={styles.divsecundaria}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        {errorMsg("noPassword")}
        {errorMsg("noIgualdade")}
        {errorMsg("noEmail")}
        {cadastroSucesso && (
        <Text style={styles.mensagemsucesso}>Cadastro concluído!</Text>
        )}
        <Text style={styles.text}> Cadastro </Text>
        <View style={styles.input}>
          <Icon name="alternate-email" size={20} color="#666" style={{marginRight: 5}}/>
          <TextInput style={styles.placeholder} placeholder="Email" keyboardType='email-address' value={email} onChangeText={(texto) => setEmail(texto)} />
        </View>
        <View style={styles.input}>
          <Icon name="lock-outline" size={20} color="#666" style={{marginRight: 5}}/>
          <TextInput style={styles.placeholder} placeholder="Senha" secureTextEntry={esconderSenha} value={password} onChangeText={(text) => setPassword(text)}/>
          <TouchableOpacity onPress={() => setEsconderSenha(!esconderSenha)}>
            { esconderSenha ?
                <IconEye name='eye-outline' size={25} />
                :
                <IconEye name='eye-off-outline' size={25} />
            }
          </TouchableOpacity>
        </View>
        <View style={styles.input}>
          <Icon name="lock-outline" size={20} color="#666" style={{marginRight: 5}}/>
          <TextInput style={styles.placeholder} placeholder="Confirmar senha" secureTextEntry={esconderSenha} value={confirmarPassword} onChangeText={(text) => setConfirmarPassword(text)}/>
          <TouchableOpacity onPress={() => setEsconderSenha(!esconderSenha)}>
            { esconderSenha ?
                <IconEye name='eye-outline' size={25} />
                :
                <IconEye name='eye-off-outline' size={25} />
            }
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.botaoentrar} onPress={handleRegister}>
          <Text style={styles.entrar}> Cadastrar </Text>
        </TouchableOpacity>
        <View style={styles.conta}>    
        <Text style={styles.textconta}> Já tem conta ?</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cadastre}>Login</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
   );
  };

export default Cadastro;
