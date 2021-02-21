import { Document } from "mongoose";
import IArrayOfPoints from "./point";
import { IUser } from "./users";

export default interface ILocation extends Document {
	date: string;
	hour: number;
	userId: IUser["_id"];
	points: IArrayOfPoints;
}
