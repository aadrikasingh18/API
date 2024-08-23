import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 3000; // Fallback to 3000 if PORT is not defined

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send("Hello from homepage");
});

app.get('/login', (req, res) => {
    res.send('<h1>Please login</h1>');
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
