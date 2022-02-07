import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import { apiMessages } from '../../services/api';
import LoadingComponent from '../../components/loading';

export default function LoadingSchool() {
  const navigation = useNavigation();
  const route = useRoute();
  const { school } = route.params;

  const handleNavigate = (messages) => {
    navigation.navigate('SchoolMessages', { messages });
  };

  const handleNavigateError = () => {
    navigation.navigate('SchoolList');
  };
  console.log(school);
  console.log(school.contexto);
  console.log(school.token);
  useEffect(() => {
    apiMessages.post(`${school.contexto}/api/mensagem/ultimas-noticias/v3`, {}, {
      headers: {
        'X-Auth-Token': school.token.toString(),
        'content-type': 'application/json',
      },
    }).catch((err) => {
      showMessage({
        message: `Erro ${err}, tente novamente`,
        type: 'danger',
      });
      handleNavigateError();
    }).then((res) => {
      console.log(res);
      handleNavigate(res);
    });
  }, [handleNavigate, handleNavigateError, showMessage]);

  return (
    <LoadingComponent image={school.urlLogoContexto} />
  );
}
