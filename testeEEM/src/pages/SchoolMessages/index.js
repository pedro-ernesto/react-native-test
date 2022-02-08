import React from 'react';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar, View } from 'react-native';
import {
  Images, Layout, Typography, Lists,
} from '../../styles';

export default function SchoolMessages() {
  const route = useRoute();

  const { messages } = route.params;

  return (
    <>
      <Layout.DefaultContainer>
        <StatusBar backgroundColor="#ececec" barStyle="dark-content" />
        <View style={Layout.shadow.header}>
          <Typography.BigListHeader>{messages.nome}</Typography.BigListHeader>
        </View>
        <Lists.BigList
          data={messages}
          keyExtractor={(singleData) => singleData.nome}
          renderItem={({ item }) => (
            <View style={Layout.shadow.list}>
              <Layout.InfoBigList>
                <Typography.ListDate>{item.data}</Typography.ListDate>
                <Layout.BigListLayout>
                  <Images.SmallListImage resizeMode="contain" source={{ uri: item.photo }} />
                  <Layout.InfoSub>
                    <Typography.ListTitle>{item.nome}</Typography.ListTitle>
                    <Typography.ListSubtitle>{item.link}</Typography.ListSubtitle>
                  </Layout.InfoSub>
                </Layout.BigListLayout>
                <Images.BigImageList resizeMode="contain" source={{ uri: item.photo }} />
              </Layout.InfoBigList>
            </View>

          )}
        />

      </Layout.DefaultContainer>
      <Layout.DivRowNavBar>
        <Layout.InfoNavBar>
          <Icon name="book" size={20} color="#c0c0c0" style={{ alignSelf: 'center' }} />
          <Typography.NavBarText>Notícias</Typography.NavBarText>
        </Layout.InfoNavBar>
        <Layout.InfoNavBar>
          <Icon name="pencil" size={20} color="#c0c0c0" style={{ alignSelf: 'center' }} />
          <Typography.NavBarText>Escrever</Typography.NavBarText>
        </Layout.InfoNavBar>
        <Layout.InfoNavBar>
          <Icon name="th-large" size={20} color="#c0c0c0" style={{ alignSelf: 'center' }} />
          <Typography.NavBarText>Menu</Typography.NavBarText>
        </Layout.InfoNavBar>
        <Layout.InfoNavBar>
          <Icon name="car" size={20} color="#c0c0c0" style={{ alignSelf: 'center' }} />
          <Typography.NavBarText>Chegando</Typography.NavBarText>
        </Layout.InfoNavBar>
        <Layout.InfoNavBar>
          <Icon name="user" size={20} color="#c0c0c0" style={{ alignSelf: 'center' }} />
          <Typography.NavBarText>Perfil</Typography.NavBarText>
        </Layout.InfoNavBar>
      </Layout.DivRowNavBar>
    </>
  );
}
