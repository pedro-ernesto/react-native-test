import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import axios from 'axios';
import LoadingComponent from '../../components/loading';

export default function LoadingSchool() {
  const navigation = useNavigation();
  const route = useRoute();
  const { school } = route.params;

  const handleNavigate = (messages) => {
    navigation.navigate('SchoolMessages', { messages });
  };

  const handleNavigateError = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    axios({
      url: `https://${school.contexto}/api/mensagem/ultimas-noticias/v3`,
      method: 'post',
      data: {},
      headers: {
        'content-type': 'application/json',
        'X-Auth-Token': school.token,
      },
    }).catch((err) => {
      showMessage({
        message: `Erro ${err}, tente novamente`,
        type: 'danger',
      });
      handleNavigateError();
    }).then((res) => {
      handleNavigate(res);
    });
  }, [handleNavigate, handleNavigateError, showMessage]);

  return (
    <LoadingComponent image={school.urlLogoContexto} />
  );
}
