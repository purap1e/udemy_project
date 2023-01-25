import axios from "axios";
import LocalStorageService, {ACCESS_TOKEN_KEY,REFRESH_TOKEN_KEY} from "./LocalStorageService";


const AUTH_REST_API_URL_SIGNUP = 'http://localhost:8080/signup';
const AUTH_REST_API_URL_LOGIN = 'http://localhost:8080/login';


class AuthService {

    static signup(user) {

        const formData = new FormData();
        formData.append('user',JSON.stringify(user));
        return axios.post(AUTH_REST_API_URL_SIGNUP,formData);
    }


    static login(data) {
        const formData = new FormData();
        formData.append("username",data.username);
        formData.append("password",data.password);

        return axios.post(AUTH_REST_API_URL_LOGIN, formData).then(res => {
            LocalStorageService.save(ACCESS_TOKEN_KEY, res.headers.get("access_token"));
            LocalStorageService.save(REFRESH_TOKEN_KEY, res.headers.get("refresh_token"));
        })
    }

}
export default AuthService;
