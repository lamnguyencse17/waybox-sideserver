/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { getSingleUser } from "../../services/users";

export default async (req: Request, res: Response): Promise<any> => {
	const { _id } = req.body;
	const user = await getSingleUser({ _id });
	return res.status(200).json(user);
};
