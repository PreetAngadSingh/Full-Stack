const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({
    origin: '*',  // Allow all origins
    methods: ['GET', 'POST'],  // Allowed methods
    allowedHeaders: ['Content-Type'],  // Allowed headers
}));
app.use(express.json());

app.get('/sum', (req, res) => {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    sum = a + b;
    console.log(sum);
    res.send(sum.toString());
});

app.listen(3000, ()=>{
    console.log("Server is running")
});