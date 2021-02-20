import { IUser } from "../../models/interfaces/users";

export interface ICreateUser {
	name: IUser["name"];
	phone: IUser["phone"];
	auth: IUser["auth"];
}
