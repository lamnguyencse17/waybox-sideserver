import locationModel from "../models/locations";
import mongoose, { QueryOptions } from "mongoose";

export const addLocation = async (
	options: QueryOptions = { upsert: true }
): Promise<any> => {
	const date = new Date();
	const queryDate = `${
		date.getUTCMonth() + 1
	}-${date.getUTCDate()}-${date.getUTCFullYear()}`;
	const result = await locationModel.findOneAndUpdate(
		{
			userId: mongoose.Types.ObjectId("6031c8480b8934c6295c016f"),
			date: queryDate,
			hour: date.getUTCHours(),
		},
		{
			$push: {
				points: { type: "Point", coordinates: [105.1174985, 10.71094] },
			},
		},
		options
	);
	return result;
};
