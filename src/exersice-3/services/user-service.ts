import axios from 'axios';
import UserData from '../interfaces/User';

class UserService {
    private url = 'https://jsonplaceholder.typicode.com/users';

    getUsersData() {
        return axios.get<UserData[]>(this.url);
    }
}

export const userService = new UserService();
