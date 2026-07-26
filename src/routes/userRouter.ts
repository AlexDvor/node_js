import { Router, Request, Response, NextFunction } from 'express';
import 'dotenv/config';

const PORT = Number(process.env.APP_PORT) || 3000;

const userRouter = Router();

userRouter.get('/getAll', (req: Request, res: Response) => {
	res.status(200).json({
		message: 'All users retrieved successfully',
	});
});

// userRouter.get('/health', (req: Request, res: Response) => {
// 	res.status(200).json({
// 		status: 'ok',
// 		uptime: process.uptime(),
// 		timestamp: new Date().toISOString(),
// 	});
// });

// userRouter.get('/info', (req: Request, res: Response) => {
// 	res.status(200).json({
// 		app: 'Node.js Docker Test App',
// 		environment: process.env.NODE_ENV || 'development',
// 		port: PORT,
// 	});
// });

// userRouter.get('/users/:id', (req: Request, res: Response) => {
// 	const { id } = req.params;

// 	res.status(200).json({
// 		message: 'User found',
// 		user: {
// 			id,
// 			name: `User ${id}`,
// 		},
// 	});
// });

// userRouter.get('/search', (req: Request, res: Response) => {
// 	const { q } = req.query;

// 	res.status(200).json({
// 		query: q || null,
// 		message: q ? `Searching for: ${q}` : 'No search query provided',
// 	});
// });

// userRouter.post('/messages', (req: Request, res: Response) => {
// 	const { message } = req.body;

// 	if (!message) {
// 		return res.status(400).json({
// 			error: 'Message is required',
// 		});
// 	}

// 	res.status(201).json({
// 		message: 'Message received',
// 		data: {
// 			message,
// 		},
// 	});
// });

// userRouter.get('/error', (req: Request, res: Response, next: NextFunction) => {
// 	next(new Error('Test server error'));
// });

export default userRouter;
