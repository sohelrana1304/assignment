const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()
const route = require('./routes/route')

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, () => {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
