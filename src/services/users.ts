import { FilterQuery, QueryFindBaseOptions } from "mongoose";
import { IUser } from "../models/interfaces/users";
import UserModel from "../models/users";

export const getSingleUser = async (
	args: FilterQuery<IUser>,
	options: QueryFindBaseOptions = { lean: true, projection: "-_id" }
): Promise<IUser> => {
	return await UserModel.findOne(args, options);
};
