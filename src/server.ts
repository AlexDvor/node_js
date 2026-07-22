import 'dotenv/config';
import express from 'express';

const app = express();

const PORT = process.env.APP_PORT || 3000;

console.log('process.env.APP_PORT', process.env.APP_PORT);
app.listen(PORT, () => {
	console.log(`Server is running in ${PORT}`);
});
