const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { PORT, mongouri } = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const TodoListRoutes = require('./routes/api/Todolist');
const path = require('path');
require('dotenv').config();

app.use(cors()); // to allow cross origin request
app.use(bodyParser.json()); //to convert the request into JSON

mongoose
    .connect(process.env.MONGO_URI, {
        useNewURLParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb database Connected..'))
    .catch((err) => console.error(err))

app.use('/api/Todolist', TodoListRoutes);

app.listen(process.env.PORT, () => {
  console.log(`App is listenning at http://localhost:${process.env.PORT}`);
});
