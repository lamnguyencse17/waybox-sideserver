import mongoose, { Schema } from "mongoose";
import { IUser } from "./interfaces/users";

const UserSchema: Schema = new Schema({
	name: { type: String, required: true },
	phone: { type: String, required: true },
	auth: {
		password: { type: String, required: true },
		token: { type: String, required: true },
	},
});

export default mongoose.model<IUser>("User", UserSchema);
