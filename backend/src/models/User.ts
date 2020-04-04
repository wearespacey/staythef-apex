import { Role } from "./Roles";

export interface User{
    id:String;
    lastName:String;
    firstName:String;
    email:String;
    phoneNumber:String;
    birthdate:Date;
    password:String;
    role:Role;
}