import { Request, Response } from "express";
import { getSingleUser } from "../../services/users";
import { OK_RESPONSE } from "../../constants/response";
import { StrippedUserOption } from "./options/getUser";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async (req: Request, res: Response): Promise<any> => {
	const { _id } = req.body;
	const user = await getSingleUser({ _id }, StrippedUserOption);
	if (!user) {
		return res.status(OK_RESPONSE).json({});
	}
	return res.status(OK_RESPONSE).json({ ...user });
};
