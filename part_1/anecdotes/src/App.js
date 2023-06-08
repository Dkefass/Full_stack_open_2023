import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
 const [points,setPoint] = useState(new Uint8Array(anecdotes.length)) 
  const [selected, setSelected] = useState(0)
  
  const handleVote= ()=>{
    const copy =[...points]
    copy[selected]++
    setPoint(copy)
  }

 
        if(Math.max.apply(0,points)===0)
        {
          return(<>
          
      <h1>Anecdote of the day </h1>
      {anecdotes[selected]}
      <br/>
      has {points[selected]} votes
      <br/>
      <button onClick={handleVote}>vote</button>
      
      <button onClick={()=> setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>
      <br/>
      <h1>Anecdote with most votes </h1>
     
           no votes
          
    
           </>)
        }else{
          return(<>
          
            <h1>Anecdote of the day </h1>
            {anecdotes[selected]}
            <br/>
            has {points[selected]} votes
            <br/>
            <button onClick={handleVote}>vote</button>
            
            <button onClick={()=> setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>
               
                 <h1>Anecdote with most votes </h1>
            {anecdotes[points.indexOf(Math.max.apply(0,points))]}
            <br/>
            has {Math.max.apply(0,points)} votes
          
                 </>)

        }
      
  
}

export default App