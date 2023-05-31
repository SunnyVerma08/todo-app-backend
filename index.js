const express = require('express');
const process = require('process');
const dotenv = require('dotenv');
const connectionDB = require('./database/connectionDB');
const cookieParser = require('cookie-parser');

const todosRoutes = require('./routes/todosRoutes');
const usersRoutes = require('./routes/usersRoutes');

const app = express();

dotenv.config();

connectionDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/todos', todosRoutes);
app.use('/api/users', usersRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
