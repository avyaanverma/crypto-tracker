const express = require('express');
const dotenv = require('dotenv').config();
const { mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173', // replace with your frontend's origin
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
};

app.use(cors(corsOptions));

//database connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log("Database connection error:", err));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Routes


app.get('/api/supported-currencies', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://coingecko.p.rapidapi.com/simple/supported_vs_currencies',
    headers: {
      'X-RapidAPI-Key': '0b79241ea8msh7c2ff7ce091ab2ep11f93djsn27a8810f7c5a',
      'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data); 
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/checkout-orders', async (req, res) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set('accessToken', '<REQUIRED>');
  encodedParams.set('checkoutId', '<REQUIRED>');

  const options = {
    method: 'GET',
    url: 'https://coinbasestefan-skliarovv1.p.rapidapi.com/getCheckoutOrders',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '0b79241ea8msh7c2ff7ce091ab2ep11f93djsn27a8810f7c5a',
      'X-RapidAPI-Host': 'Coinbasestefan-skliarovV1.p.rapidapi.com'
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use('/',require('./routes/authRoutes'))

const port = 8000;
app.listen(port,()=> console.log(`Server is running on port ${port}`))
