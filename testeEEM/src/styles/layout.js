import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const gradient = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export const LoginContainer = styled.View`
  flex:1;
  width:100%;
  align-items:center;
  justify-content: center;
`;

export const InputViewUser = styled.View`
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-radius: 1px;
  padding: 0 15px;
  border: 1px solid #ffffff;
  width: 100%;

`;

export const Div = styled.View`
  width: ${(props) => (props.width)}
`;

export const InputViewPass = styled.View`
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-radius: 1px;
  padding: 0 15px;
  border: 1px solid #ffffff;
  border-top-width: 0px;
  width: 100%;
  font-style: #333333;

`;

export const DivRow = styled.View`
  flex-direction:row;
  width:100%;
  align-self: center;
  justify-content: center;
`;
