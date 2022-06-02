import Axios from 'axios';

export default Axios.create({
    baseURL:"http://128.199.11.49", // for production
    // baseURL:"http://localhost:5000", // only for local
    withCredentials: false,
    headers:{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
});