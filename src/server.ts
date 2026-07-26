import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import userRouter from './routes/userRouter.js';

const app = express();

const PORT = Number(process.env.APP_PORT) || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
	res.status(200).json({
		message: 'Express API is running!',
	});
});

app.use('/user', userRouter);

// 404
app.use((req: Request, res: Response) => {
	res.status(404).json({
		error: 'Not Found',
		message: `Route ${req.method} ${req.originalUrl} does not exist`,
	});
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err);

	res.status(500).json({
		error: 'Internal Server Error',
		message: err.message,
	});
});

app.listen(PORT, '0.0.0.0', () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
