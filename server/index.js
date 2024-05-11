const express = require('express');
const dotenv = require('dotenv').config();
const { mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();

// const corsOptions = {
//   origin: true, // replace with your frontend's origin
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
// };

// app.use(cors(corsOptions));

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//database connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log("Database connection error:", err));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Routes


app.get('/api/coins', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false',
    headers: {
      'X-RapidAPI-Key': '0b79241ea8msh7c2ff7ce091ab2ep11f93djsn27a8810f7c5a',
      'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data); 
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/coins/:id', async (req, res) => {
  const { id } = req.params;
  const options = {
    method: 'GET',
    url: `https://api.coingecko.com/api/v3/coins/${id}`,
    headers: {
      'X-RapidAPI-Key': '0b79241ea8msh7c2ff7ce091ab2ep11f93djsn27a8810f7c5a',
      'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
    }
};



  try {
    const response = await axios.request(options);
    // console.log(response.data); 
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/coins/:id/historical', async (req, res) => {
  const { id } = req.params;
  let { days } = req.query;
  
  // If days parameter is not provided or not a valid number, default to 1 day
  if (!days || isNaN(parseInt(days))) {
    days = 1;
  }

  const options = {
    method: 'GET',
    url: `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=INR&days=${days}`,
    params: {
      vs_currency: 'INR',
      days: days,
    },
    headers: {
      'X-RapidAPI-Key': '0b79241ea8msh7c2ff7ce091ab2ep11f93djsn27a8810f7c5a',
      'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
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
