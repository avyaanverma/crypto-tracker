import {useContext} from 'react';
import { UserContext } from '../../../context/userContext';
import './Dashboard.css';
import Card from './comps/Card';

export default function Dashboard() {
    const {user} = useContext(UserContext);
  return (
    <div id='dash'>
      {!!user && (<h1>Hi {user.name}!</h1>)}
      <div className="bg-container">
        <div className="container">
          <div id="container-top">
            <div className="price">
            <h4>Recent Price</h4>
            <h2>Bitcoin: $52,291</h2>
            </div>
          </div>
          <div id='Graphs'>
            <Card coin="Bitcoin"/>
            <Card coin="Solaris"/>
            <Card coin="Ethereum"/>    
          </div>
        </div>
      </div>
    </div>
  )
}
      
