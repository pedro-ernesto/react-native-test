import styled from 'styled-components/native';

export const BigMainText = styled.Text`
  font-size: 25px;
  color: #FFFFFFFF;
  align-self: flex-start;
  margin-bottom: 20px;
`;

export const SmallMainText = styled.Text`
  font-size: 13px;
  color: #ffffff;
  margin-top: 4px;
  text-align: center;
  align-self:${(props) => (props.align)}
`;

export const LoginButtonText = styled.Text`
  font-size: 25px;
  color: #0086A1;
  text-align: center;
`;

export const MobileLoginButtonText = styled.Text`
  justify-content:center;
  align-self: center;
  font-size: 22px;
  color: white;
  text-align: center;
`;

export const ListTitle = styled.Text`
  font-size: 20px;
  color: #202121;
  padding-left: 10px;
`;

export const ListSubtitle = styled.Text`
  font-size: 11px;
  color: #c0c0c0;
  padding-top: 5px;
  padding-left: 10px;
`;
export const BigListHeader = styled.Text`
  font-size: 25px;
  color: #2596be;
  font-weight: bold;
  align-self: flex-start;
  padding: 5px;
`;
export const ListDate = styled.Text`
  align-self: flex-end;
  font-size: 9px;
  color: #c0c0c0;

`;
export const NavBarText = styled.Text`
  align-self: center;
  font-size: 11px;
  color: #c0c0c0;
  padding-top: 5px;
`;
