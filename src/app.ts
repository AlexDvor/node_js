import express, { type NextFunction, type Request, type Response } from 'express';
import { userRouter } from './modules/users/user.routes.js';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req: Request, res: Response) => {
	res.status(200).json({
		message: 'Express API is running!',
	});
});

app.use('/user', userRouter);

app.use((req: Request, res: Response) => {
	res.status(404).json({
		error: 'Not Found',
		message: `Route ${req.method} ${req.originalUrl} does not exist`,
	});
});

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
	console.error(err);

	res.status(500).json({
		error: 'Internal Server Error',
		message: err instanceof Error ? err.message : 'Unknown error',
	});
});
