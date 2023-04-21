import User from '../models/User';
import type { AxiosResponse, AxiosRequestConfig } from "axios";
import Repository from './Repository';

export default class UserRepository extends Repository {
    public constructor() {
        const path: string = 'api/v1/user';
        super({
            'url': path
        });
        this.path = path;
        this.model = User;
    }

    public getListOfUser(params?: unknown): Promise<AxiosResponse<User, AxiosRequestConfig>> {
        return this.axios.get<User>('');
    }
}