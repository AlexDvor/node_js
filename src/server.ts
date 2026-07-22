import express from 'express';

const PORT = 3000;
const app = express();

console.log(process.env.APP_PORT);
app.listen(PORT, () => {
	console.log(`Server is running in ${PORT}`);
});
