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

export const SearchContainer = styled.View`
  background:#D3D3D3;
  width:100%;
  align-items:center;
  justify-content: center;
`;

export const SearchInputView = styled.View`
  flex-direction: row;
  align-items: center;
  height: 35px;
  border-radius: 7px;
  padding: 0 15px;
  background: #ffffff;
  width: 90%;
  margin: 10px;
`;
export const Info = styled.View`
  flex:1;
  margin-left: 10px;
  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-color: #D3D3D3
`;

export const CenteredContainer = styled.View`
  flex:1;
  align-items:center;
  justify-content: center;
  padding: 0 20px;
  background: ${(props) => (props.backgroundColor)}
`;

export const DefaultContainer = styled.View`
  flex:1;
  padding: 20px;
  background: #ececec;
`;
export const BigListLayout = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;
export const InfoBigList = styled.View`
  flex:1;
  margin-left: 5px;
  padding-bottom: 15px;
  padding-right: 5px;
`;
export const InfoSub = styled.View`
  flex:1;
  margin-left: 10px;
  padding-bottom: 15px;
`;
export const shadow = StyleSheet.create({
  header: {
    alignItems: 'center',
    borderWidth: 0,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1.5,
    backgroundColor: '#0000',
  },
  list: {
    paddingTop: 10,
    marginBottom: 10,
    paddingLeft: 3,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1.5,
    backgroundColor: '#0000',
  },
});

export const DivRowNavBar = styled.View`
  flex-direction:row;
  height: 50px;
  background: #FFFFFF;
  border-width: 0.5px;
  border-color: #eee;
  width:100%;
  align-self: center;
  justify-content: center;
`;
export const InfoNavBar = styled.View`
  padding: 4px;
  flex: 1;
`;
