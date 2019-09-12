import React, {useState, useEffect} from 'react';
import axios from "axios";

const SwapiApi = () => {
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
      {rwState}
     
    )};
    
  
}
export default SwapiApi;