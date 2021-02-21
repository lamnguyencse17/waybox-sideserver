import { FilterQuery, QueryOptions } from "mongoose";
import { IUser } from "../models/interfaces/users";
import UserModel from "../models/users";

export const getSingleUser = async (
	args: FilterQuery<IUser>,
	options: QueryOptions = { lean: true, projection: "-_id" }
): Promise<IUser | null> => {
	return await UserModel.findOne(args, null, options);
};
