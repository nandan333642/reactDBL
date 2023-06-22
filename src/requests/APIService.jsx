import axios from 'axios';

const EVENT_API_URL = "http://localhost:8080/getEvent?name=";

class APIService {
    
    getEvent(name){
        return axios.get(EVENT_API_URL+name);
    }

}

export default new APIService();