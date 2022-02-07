import React from 'react';
import FlashMessage from 'react-native-flash-message';
import Routes from './routes';

export default function App() {
  return (
    <>
      <Routes />
      <FlashMessage position="top" />
    </>
  );
}
