export interface Roles{
    admin: boolean;
}

export default class User {
    public username: string;
    public email: string;
    public image!: string;
    public first_name!: string;
    public last_name!: string;
    public middle_name!: string
    public id: number;
    public token!: string;
    public roles: Roles;

    constructor(authData: any){
        this.username = authData.username,
        this.email = authData.email;
        this.image = authData.image;
        this.id = authData.id;
        this.roles  = {
            admin: false
        }
    }

}
