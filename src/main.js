import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import axios from 'axios';
import './assets/styles.css';

const axiosInstance = axios.create({
  baseURL: 'http://3.37.71.106:8080', // Backend server URL
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

const app = createApp(App);
app.use(router);
app.use(store);
app.config.globalProperties.$http = axiosInstance;
app.mount('#app');
