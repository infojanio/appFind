import axios from 'axios';

const api = axios.create({
   baseURL: 'http://192.168.1.12:3333'  //use sempre o ip da máquina
});
export default api;