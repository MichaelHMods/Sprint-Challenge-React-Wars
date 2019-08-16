import React, { useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import DataCard from "./Datacard";


function App() {
  
  const [rwState, setRWState] = useState();
    useEffect(() => {
      const fetchData = () => {
        axios.get('https://swapi.co/api/people')
        .then(response => {
          const test = response.data
          console.log(response.data)
          setRWState(test);
        })
        .catch(error => {
          console.log(error)
        })
      };
      fetchData();
    },[])
        
      console.log(rwState)        
      if (!rwState) {return <h1>loading</h1>}
      else {
  
    return (
      
      <div className="App">
        <h1 className="Header">{rwState}</h1>
        <p>May the force be with you.</p>
        <DataCard/>

      </div>
     
    )};
    
  }
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


export default App;
