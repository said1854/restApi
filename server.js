const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const subscribersRoutes = require('./routes/subscribers');
app.use('/subscribers', subscribersRoutes);

app.get('/', (req, res) => {
    res.send('HEY')
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})