require('dotenv').config()
const express = require('express')
const app = express();
const cors = require('cors')
const corsOptions =require('./config/corsOption')
const PORT = 3000;
app.use(cors(corsOptions));
app.use(express.json())

app.use('/', (req, res) => {
    return res.send('hello from notes backend')
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));