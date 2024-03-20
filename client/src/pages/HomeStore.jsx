import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function HomeStore() {
  const [fetchCoin, setFetchCoin] = useState([]);
  
  useEffect(() => {
    console.log("mounted");
    Axios.get("/api/supported-currencies")
    .then((res)=>{
      console.log(res.data);
      setFetchCoin(res.data)
    })
  }, []);

  return (
    <div>
      {fetchCoin.map((coin, index) => (
        <div key={index}>
          <p>{index}</p>
          <p>{coin}</p>
        </div>
      ))}
    </div>
  );
}