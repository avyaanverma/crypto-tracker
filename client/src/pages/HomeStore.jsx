import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './HomeStore.css'
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons library
import Coin from './Coin';

export default function HomeStore() {
  const [fetchCoin, setFetchCoin] = useState([]);
  const [search, setSearch] = useState('');

  
  useEffect(() => {
    console.log("mounted");
    Axios.get("/api/coins")
    .then((res)=>{
      console.log(res.data);
      setFetchCoin(res.data)
    })
  }, []);

  const handleChange = (e)=>{
    setSearch(e.target.value);
    // console.log(search);
  }

  const filteredCoins = fetchCoin.filter(coin=>{
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="home-container">
      <div className="combined-container">
        <div className="coin-info">
          <p><span className="label">Cryptos:</span> <span className="value">2.4M+</span></p>
          <p><span className="label">Exchanges:</span> <span className="value">735</span></p>
          <p><span className="label">Market Cap:</span> <span className="value">$2.53T</span></p>
          <p><span className="label">24h Vol:</span> <span className="value">$156.63B</span> <span className="percentage">8.60%</span></p>
        </div>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search your coin" onChange={handleChange}/>
          <FaSearch className="search-icon" /> {/* Render the search icon inside the input */}
        </div>
      </div>
      <div className="coin-section">
      {filteredCoins.length === 0 ? <h1 className='message'>No Result found</h1> :
        filteredCoins.map(coin=>{
          return(
            <Coin 
              id={coin.id} 
              name={coin.name} 
              image={coin.image} 
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              pricechange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          );
        })
      }
      </div>

    </div>
  );
}
