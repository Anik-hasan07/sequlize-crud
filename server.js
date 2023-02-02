const express = require('express');
const cors = require('cors');
const router = require('./routes/productRouter');
const app = express();

const corsOptions = {
    origin: 'http://localhost:8081'
};

// global middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use("/api/products",router)


// api
app.get('/', (req, res) => {
    res.json({
        name: 'Basit',
        email: 'basit@gmail.com',
    })
})

// server
app.listen(8080, () => {
    console.log(`Server is running on 8080`)
})