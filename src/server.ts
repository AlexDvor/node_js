import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';

const app = express();

const PORT = Number(process.env.APP_PORT) || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
	res.status(200).json({
		message: 'Node.js + Express API is running!',
	});
});

app.get('/health', (req: Request, res: Response) => {
	res.status(200).json({
		status: 'ok',
		uptime: process.uptime(),
		timestamp: new Date().toISOString(),
	});
});

app.get('/api/info', (req: Request, res: Response) => {
	res.status(200).json({
		app: 'Node.js Docker Test App',
		environment: process.env.NODE_ENV || 'development',
		port: PORT,
	});
});

app.get('/api/users/:id', (req: Request, res: Response) => {
	const { id } = req.params;

	res.status(200).json({
		message: 'User found',
		user: {
			id,
			name: `User ${id}`,
		},
	});
});

app.get('/api/search', (req: Request, res: Response) => {
	const { q } = req.query;

	res.status(200).json({
		query: q || null,
		message: q ? `Searching for: ${q}` : 'No search query provided',
	});
});

app.post('/api/messages', (req: Request, res: Response) => {
	const { message } = req.body;

	if (!message) {
		return res.status(400).json({
			error: 'Message is required',
		});
	}

	res.status(201).json({
		message: 'Message received',
		data: {
			message,
		},
	});
});

app.get('/api/error', (req: Request, res: Response, next: NextFunction) => {
	next(new Error('Test server error'));
});

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
