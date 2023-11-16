require('dotenv').config()
const express = require('express')
const app = express();
const cors = require('cors')
const corsOptions =require('./config/corsOption')
const PORT = 3000;
app.use(cors(corsOptions));
app.use(express.json())

app.get('/', (req,res) => res.send("hello"))
app.use('/notes', require('./Routes/notes'))
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));