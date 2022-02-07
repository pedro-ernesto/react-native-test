import axios from 'axios';

export const apiLogin = axios.create({
  baseURL: 'https://api.tst2.escolaapp.com/api/v1/Acesso/',
});

export const apiMessages = axios.create({
  baseURL: 'https://',
});
