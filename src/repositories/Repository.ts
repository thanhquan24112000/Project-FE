import axios from "axios";
import type { AxiosRequestConfig, AxiosInstance } from "axios";

export default class Repository<M = unknown> {
    public path: string;
    public model: M | unknown;
    public auth: boolean;
    public axios: AxiosInstance;

    public constructor(config?: AxiosRequestConfig) {
        this.axios = axios.create({
            baseURL: `http://localhost:8000/${config?.url}`,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            ...config
        });
    }
}