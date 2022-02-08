import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'react-native';
import filter from 'lodash.filter';
import {
  Input, Lists, Images, Layout, Buttons, Typography,
} from '../../styles';

export default function SchoolList() {
  const [search, setSearch] = useState();
  const [filteredData, setFilteredData] = useState();
  const navigation = useNavigation();
  const route = useRoute();

  const { schools } = route.params;

  useEffect(() => {
    if (!search || search === '') {
      setFilteredData(schools);
    }
  }, [setFilteredData]);
  const handleSearch = (text) => {
    const formattedText = (text.toLowerCase()).replace(/ /g, '');

    const searchData = filter(schools, (school) => (

      ((school.nomeAplicacao.toLowerCase()).replace(/ /g, '')).indexOf(formattedText) > -1));

    setFilteredData(searchData);
    setSearch(text);
  };

  const handleNavigate = (school) => {
    navigation.navigate('LoadingSchool', { school });
  };
  return (
    <>
      <StatusBar backgroundColor="#2596be" />
      <Layout.SearchContainer>
        <Layout.SearchInputView>
          <Icon name="search" size={20} color="#333333" />
          <Layout.Div width="10px" />
          <Input.SearchInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Busca                                                                               "
            value={search}
            onChangeText={(text) => handleSearch(text)}
            returnKeyType="send"
          />
        </Layout.SearchInputView>
      </Layout.SearchContainer>
      <Lists.SmallList
        data={filteredData}
        keyExtractor={(singleData) => singleData.id}
        renderItem={({ item }) => (
          <Buttons.SmallListButton onPress={() => handleNavigate(item)}>
            <>
              {item.urlLogoContexto
              && <Images.SmallListImage resizeMode="contain" source={{ uri: item.urlLogoContexto }} />}
              <Layout.Info>
                <Typography.ListTitle>{item.nomeAplicacao}</Typography.ListTitle>
                <Typography.ListSubtitle>{item.nomeCompleto}</Typography.ListSubtitle>
              </Layout.Info>
              <Icon
                name="caret-right"
                size={20}
                color="#333333"
                style={{ alignSelf: 'center' }}
              />
            </>
          </Buttons.SmallListButton>

        )}
      />
    </>
  );
}
