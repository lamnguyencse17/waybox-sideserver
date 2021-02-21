import mongoose, { Schema } from "mongoose";
import ILocation from "./interfaces/locations";

const pointSchema = new mongoose.Schema({
	type: {
		type: String,
		enum: ["Point"],
		required: true,
	},
	coordinates: {
		type: [Number],
		required: true,
	},
	second: {
		type: Number,
		required: true,
		default: () => {
			const date = new Date();
			return date.getUTCMinutes() * 60 + date.getUTCSeconds();
		},
	},
});

const LocationSchema: Schema = new Schema({
	date: {
		type: Date,
		required: true,
		default: () => {
			const date = new Date();
			return `${
				date.getUTCMonth() + 1
			}-${date.getUTCDate()}-${date.getUTCFullYear()}`;
		},
	},
	hour: {
		type: Number,
		required: true,
		default: () => {
			const date = new Date();
			return date.getUTCHours();
		},
	},
	userId: { type: Schema.Types.ObjectId, required: true, ref: "Users" },
	points: [pointSchema],
});
LocationSchema.index({ date: 1, hour: 1, userId: 1 }, { unique: true });
LocationSchema.index({ location: "2dsphere" });

export default mongoose.model<ILocation>("Location", LocationSchema);
