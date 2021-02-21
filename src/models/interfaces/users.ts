import { Document } from "mongoose";
import { IAuth } from "./auth";

export interface IUser extends Document {
	name: string;
	phone: string;
	auth: IAuth;
}

export interface IStrippedUser {
	name: string;
	phone: string;
}
