import React from 'react'
import Content from '../components/Content';
import News from '../components/News';
import Tracker from '../components/Tracker';
import Predictor from '../components/Predictor';

export default function Home() {
  return (
    <div>
      <Content />
      <hr color='gray '/>
      <News/>
      <hr color='gray'/>
      <Tracker/>
      <hr color='gray'/>
      <Predictor/>

    </div>
  )
}
