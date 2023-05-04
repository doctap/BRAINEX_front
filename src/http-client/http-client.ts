import axios from 'axios';

const SERVER_URL = process.env.SERVER_URL ?? 'http://localhost:5000';

export const login = (login: string, password: string) => {
  const res = axios.post(`${SERVER_URL}/login`, { login, password });
};
