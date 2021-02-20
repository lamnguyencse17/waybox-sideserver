import { Document } from "mongoose";

export interface IAuth extends Document {
	token: string;
	password: string;
}
