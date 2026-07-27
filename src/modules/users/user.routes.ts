import {
	Router,
	type NextFunction,
	type Request,
	type Response,
} from 'express';
import { createUser, getAllUser } from './user.service.js';

export const userRouter = Router();

userRouter.get('/getAll', async (_req: Request, res: Response) => {

	const allUser = await getAllUser()

	res.status(200).json(allUser) 
	
});

userRouter.post(
	'/create',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const newUser = await createUser({
				name: typeof req.body.name === 'string' ? req.body.name : '',
				email: typeof req.body.email === 'string' ? req.body.email : '',
			});

			res.status(201).json(newUser);
		} catch (error) {
			next(error);
		}
	},
);
