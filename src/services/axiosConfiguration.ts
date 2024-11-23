import axios from 'axios';
import {Alert} from 'react-native';
import Config from 'react-native-config';

const BASE_URL = 'https://api.themoviedb.org/3';
console.log('Config.API_TOKEN', Config.API_TOKEN);
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGQ3YzAwN2U1OWZmYTkzZjgyYTU4ZDhlZGRjMTlhMiIsIm5iZiI6MTczMjI5NjExMS4zNDAyODQzLCJzdWIiOiI2MGYxNjc0ODcxZmZkZjAwMmFkNDM5NTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GUyTyBZ3lP87FqFIkKTsB6JQDHnT99Njpf3oQQR7K8I`,
  },
});

axios.interceptors.response.use(
  response => response,
  async error => {
    console.log('error.response?.status', error.response?.status);
    if (error.response?.status === 401) {
      Alert.alert(
        'Your API token has reached its usage limit. Please renew or upgrade your token to continue.',
      );
    }
    return Promise.reject(error);
  },
);
