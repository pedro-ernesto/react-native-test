import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator, StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { showMessage } from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/FontAwesome';
import { apiLogin } from '../../services/api';
import {
  Layout, Buttons, Typography, Input,
} from '../../styles';

export default function Login() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleNavigate = (schools) => {
    navigation.navigate('SchoolList', { schools });
  };

  useEffect(() => {
    AsyncStorage.getItem('sessao').then((res) => {
      if (res) {
        handleNavigate(JSON.parse(res));
      }
    });
  }, [handleNavigate, AsyncStorage]);

  console.log(user);
  console.log(password);
  const handleLogin = () => {
    setLoading(true);
    apiLogin.post('login', {
      login: user,
      senha: password,
      nomeApp: 'br.com.eem.teste',
      versaoApp: '10',
      versaoSO: '10',
      idDispositivo: 'teste-mobile',
    }).catch((err) => {
      setLoading(false);
      showMessage({
        message: `Erro ${err}, tente novamente`,
        type: 'danger',
      });
    }).then((res) => {
      console.log(res);
      if (res.data.conteudo.length === 0) {
        setLoading(false);
        showMessage({
          message: 'Usuário não existe',
          type: 'danger',
        });
        console.log('erro');
      } else {
        AsyncStorage.setItem('sessao', JSON.stringify(res.data.conteudo));
        setLoading(false);
        handleNavigate(res.data.conteudo);
      }
    });
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#009BA0" />

      <LinearGradient
        colors={['#009BA0', '#0086A1', '#006EA1']}
        style={Layout.gradient.linearGradient}
      >
        <Buttons.HelpButton onPress={() => {
          showMessage({
            message: 'Função em desenvolvimento',
            type: 'warning',
          });
        }}
        >
          <Icon name="question-circle" size={30} color="#FFFFFF" />
        </Buttons.HelpButton>
        <Layout.LoginContainer>

          <Typography.BigMainText>
            Informe o usuário e a senha encaminhados pela escola
          </Typography.BigMainText>
          <Layout.InputViewUser>

            <Icon name="user" size={20} color="#FFFFFF" />
            <Layout.Div width="10px" />
            <Input.UserInput
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Usuário                                                                         "
              value={user}
              onChangeText={(text) => setUser(text)}
              returnKeyType="send"
            />
          </Layout.InputViewUser>
          <Layout.InputViewPass>
            <Icon name="key" size={20} color="#FFFFFF" />
            <Layout.Div width="5px" />
            <Input.PassInput
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Senha                                                                                                                              "
              value={password}
              onChangeText={(text) => setPassword(text)}
              returnKeyType="send"
            />
          </Layout.InputViewPass>
          <Buttons.LoginButton onPress={handleLogin}>
            {loading
              ? <ActivityIndicator color="#0086A1" />
              : <Typography.LoginButtonText>Entrar</Typography.LoginButtonText>}

          </Buttons.LoginButton>
          <Layout.DivRow>
            <Typography.SmallMainText
              align="flex-start"
              onPress={() => {
                showMessage({
                  message: 'Função em desenvolvimento',
                  type: 'warning',
                });
              }}
            >
              Esqueci a minha senha

            </Typography.SmallMainText>
            <Layout.Div width="50px" />
            <Typography.SmallMainText align="center">|</Typography.SmallMainText>
            <Layout.Div width="50px" />
            <Typography.SmallMainText
              align="flex-end"
              onPress={() => {
                showMessage({
                  message: 'Função em desenvolvimento',
                  type: 'warning',
                });
              }}
            >
              Política de Privacidade

            </Typography.SmallMainText>
          </Layout.DivRow>
        </Layout.LoginContainer>

        <Buttons.MobileLoginButton onPress={() => {
          showMessage({
            message: 'Função em desenvolvimento',
            type: 'warning',
          });
        }}
        >
          <>
            <Icon name="mobile" size={20} color="#FFFFFF" />
            <Layout.Div width="79px" />
            <Typography.MobileLoginButtonText>Entrar com Celular</Typography.MobileLoginButtonText>
          </>
        </Buttons.MobileLoginButton>

      </LinearGradient>
    </>
  );
}
