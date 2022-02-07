import React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Images, Layout } from '../styles';

export default function LoadingComponent({ image }) {
  return (
    <>
      <StatusBar hidden backgroundColor="#FFFFFF" />
      <Layout.CenteredContainer backgroundColor="#FFFFFF">
        {image !== null
      && (
      <>
        <Images.BigImage source={{ uri: image }} resizeMode="contain" />
        <ActivityIndicator size="large" />
      </>
      )}

      </Layout.CenteredContainer>
    </>
  );
}
