import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/users', usersRoutes); //user routes are starting with users as a default set kr diya hai

//pehle path ayega phir call back function
// '/' => home route
app.get('/', (req, res)=>
{
    res.send("Hello from homepage");
});

app.get('/login', (req,res) =>
{
    res.send('<h1>Please login</h1>')
})


app.listen(process.env.PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));