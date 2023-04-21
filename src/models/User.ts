import { Expose } from 'class-transformer';

export default class User {
    @Expose({ name: 'id' })
    public id: number;

    @Expose({ name: 'fullName' })
    public fullName: string;

    @Expose({ name: 'email' })
    public email: string;
}