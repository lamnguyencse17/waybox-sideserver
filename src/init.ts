import mongoose from "mongoose";

export const initMongoose = (): void => {
	mongoose.connect(
		"mongodb://localhost:27017/waybox?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		}
	);
};
