import axios from "axios";
const API_URL = "http://localhost:9999";

class UserService {
    saveUser(user) {
        return axios.post(API_URL + "/saveUser", user);
     

      

    }


}

export default new UserService