import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconEye from 'react-native-vector-icons/MaterialCommunityIcons';
import {useForm} from 'react-hook-form';
import {AuthContext, useAuth, login} from '../../Context/authContext';
import {useState, useContext, useEffect} from 'react';
import {createSession} from '../../Service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [esconderSenha, setEsconderSenha] = useState(true);
  const [loading, setLoading] = useState(false);
  const context = useContext(AuthContext);
  const [rememberPassword, setRememberPassword] = useState(false)
  const [errorMensagem, setErrorMensagem] = useState({});
  
  const erro = {
    email: 'Email ou senha inválido',
    password: 'Email ou senha inválidas',
    noEmail: 'Por favor coloque o email',
    noPassword: 'Por favor coloque a senha',
    noResponse: 'Login mal sucedido',
  };
  const errorMSG = name => {
    return (
      errorMensagem &&
      name === errorMensagem.name && (
        <Text style={styles.mensagemerror}>{errorMensagem.message}</Text>
      )
    );
  };

  

  const handleRememberMeChange = async (isChecked) => {
    setRememberPassword(isChecked);
    if(isChecked){
      try{
      AsyncStorage.setItem("rememberedEmail", email);
      AsyncStorage.setItem("rememberedPassword", password);
      }catch(error){
        console.log(error)
      }
    }else{
      AsyncStorage.removeItem("rememberedEmail")
      AsyncStorage.removeItem("rememberedPassword")
      setEmail("");  
      setPassword("");  
    }
  }
  useEffect(() => {
    const loadRememberedData = async () => {
      try {
        const rememberedEmail = await AsyncStorage.getItem("rememberedEmail");
        const rememberedPassword = await AsyncStorage.getItem("rememberedPassword");
        console.log(rememberedPassword, rememberedEmail);
        if (rememberedEmail) {
          setEmail(rememberedEmail);
        }
        if (rememberedPassword) {
          setPassword(rememberedPassword);
        }
        if(rememberedEmail){
          setRememberPassword(true)
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    loadRememberedData();
  }, []);

  useEffect(() => {
    async function checkToken() {
      const token = await AsyncStorage.getItem('token');
      const loggedUserId = JSON.parse(
        await AsyncStorage.getItem('loggedUserId'),
      );
      if (token && loggedUserId) {
        context.setUser(loggedUserId);
        context.setToken(token);
      }
    }
    checkToken();
  }, []);

  const handlePressLogin = async () => {
    if (validateInput(email, password)) {
      try {
        const response = await createSession(email, password);
        AsyncStorage.setItem('token', response.token);
        AsyncStorage.setItem(
          'loggedUserId',
          JSON.stringify(response.loggedUserId),
        );
        context.setToken(response.token);
        context.setUser(response.loggedUserId);
        return;
      } catch (error) {
        console.log(error);
      }
    }
  };

  const validateInput = (email, password) => {
    setErrorMensagem(null);
    if (!email) {
      setErrorMensagem({name: 'noEmail', message: erro.noEmail});
      setTimeout(() => {
        setErrorMensagem(null);
      }, 3000);
      return false;
    }
    if (!password) {
      setErrorMensagem({name: 'noPassword', message: erro.noPassword});
      setTimeout(() => {
        setErrorMensagem(null);
      }, 3000);
      return false;
    }
    return true;
  };

  return (
    <SafeAreaView style={styles.div}>
      <View style={styles.container}>
        <View style={styles.divsecundaria}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        {errorMSG('noPassword')}
        {errorMSG('noEmail')}
        <Text style={styles.text}> Login </Text>
        <View style={styles.input}>
          <Icon
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          <TextInput
            style={styles.placeholder}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={texto => setEmail(texto)}
          />
        </View>
        <View style={styles.input}>
          <Icon
            name="lock-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          <TextInput
            style={styles.placeholder}
            placeholder="Senha"
            secureTextEntry={esconderSenha}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity onPress={() => setEsconderSenha(!esconderSenha)}>
            {esconderSenha ? (
              <IconEye name="eye-outline" size={25} />
            ) : (
              <IconEye name="eye-off-outline" size={25} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.rememberme}>
        <Text style={styles.textremember}>Remember me</Text>
        <BouncyCheckbox
          size={25}
          fillColor='#3b8ea5'
          unfillColor="#FFFFFF"
          iconStyle={{borderColor: '#3b8ea5'}}
          innerIconStyle={{borderWidth: 2}}
          style={styles.checked}
          isChecked={rememberPassword}
          onPress={handleRememberMeChange}
        />
        </View>
        <TouchableOpacity
          style={styles.botaoentrar}
          onPress={() => handlePressLogin(email, password)}>
          <Text style={styles.entrar}> Entrar </Text>
        </TouchableOpacity>
        <View style={styles.conta}>
          <Text style={styles.textconta}> Não tem conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.cadastre}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
