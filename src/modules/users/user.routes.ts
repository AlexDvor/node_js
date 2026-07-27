import {
	Router,
	type NextFunction,
	type Request,
	type Response,
} from 'express';
import { createUser } from './user.service.js';

export const userRouter = Router();

userRouter.get('/getAll', (_req: Request, res: Response) => {
	res.status(200).json({
		message: 'All users retrieved successfully',
	});
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
