import React, { useState } from 'react';
  


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all=good+neutral+bad
  
  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )
  const  StatisticLine =({text,value})=><p>{text}{value}</p>
  const Statistics = ({bad,good,neutral}) => {
    return (
    <>
    <table>
      <tbody>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <p>all {all}</p>
      <p> avrage {(good-bad)/all}</p>
      <p>positive {(good/all)}%</p>
      </tbody>
    </table>
    
      
   
    </>
    )
  }
 

    if ( all> 0)

    {
      return (
      <>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
      
      </>)
    }
    else{ return(
    <>
    <h1>give feedback</h1>
    <Button handleClick={handleGoodClick} text='good' />
    <Button handleClick={handleNeutralClick} text='neutral' />
    <Button handleClick={handleBadClick} text='bad' />
    <p> No feedback given</p>
    </>
    )}
  
}

export default App

