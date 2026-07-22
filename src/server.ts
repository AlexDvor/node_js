import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';

const app = express();

const PORT = Number(process.env.APP_PORT) || 3000;

console.log('process.env.APP_PORT', process.env.APP_PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
	res.json({ message: 'Hello Home Page!' });
});

app.get('/app', (req: Request, res: Response) => {
	res.json({ message: 'Hello App!' });
});

app.use((req: Request, res: Response) => {
	res.json({ message: 'Not Found' });
});

app.listen(PORT, () => {
	console.log(`Server is running in ${PORT}`);
});
