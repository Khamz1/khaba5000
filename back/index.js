const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());
app.use(require("./routes/post.routes"))
app.use(require("./routes/user.routes"))

mongoose.connect('mongodb+srv://algo-crm:AlgoSalSabil2024@algo-crm.m4ao4.mongodb.net/',{

})
    .then(() => console.log('Connected to DB'))
.catch(err => console.log(err,"Error connecting to DB"));

app.listen(3030,()=>{
    console.log('Server started on port 4000');
})
