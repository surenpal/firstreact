import React from 'react'
import './App.css';
import Card from './components/card.jsx'

export const App = () => {
  return (
    <div>
      <Card name="Surendra" age={25} />
      <Card name="Dhiren" age={30} />
      <Card name="Bhiren" age={35} />
    </div>
  )
}
 export default App