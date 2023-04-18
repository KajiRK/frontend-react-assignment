import axios, {AxiosInstance} from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // we can use .env file for this if we have multiple entpoints - properly suits for complex application with various 
    headers: {
        Accept: 'text/json',
        'Content-Type': 'application/json'
    }
});

export default instance;