const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require("./config/db");
const userRoutes = require('./routes/users')
const funkoRoutes = require('./routes/funkoRoute')


require("dotenv").config();

connectDB();

app.use(cors());

app.use(bodyParser.json());
app.use(express.json());


app.use('/api', funkoRoutes)
app.use('/usuario', userRoutes)
app.get('/', (req, res) => res.send('Funko API'))

app.listen(process.env.PORT, () => {
    console.log("El servidor esta corriendo");
});
