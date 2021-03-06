const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');


const app = express();

// bodyparser middleware
app.use(bodyParser.json());

const db = require('./config/key').mongoURI;

mongoose.connect(db)
.then(() => console.log('mongoose connected...'))
.catch(err => console.log(err));

app.use('/api/items' , items)
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));