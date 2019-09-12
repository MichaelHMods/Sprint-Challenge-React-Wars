import React, { useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import DataCard from "./Datacard";
//Style
import styled from "styled-components";


const AppContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    
    // border: 1px solid red;
`
const PageHeader = styled.h1 `
    font-size: 4rem;
    padding-left: 35%
    `
const PageHeader2 = styled.h1 `
    font-size: 4rem;
    padding-left: 10%
    `
const HeaderBox = styled.div `
    width:100%
    justify-content:center
    border: 1px solid black
    `

function App() {
  
  const [rwState, setRWState] = useState();
    useEffect(() => {
      const fetchData = () => {
        axios.get('https://swapi.co/api/people/')
        .then(response => {
          const test = response.data.results
          console.log(response.data.results)
          setRWState(test);
        })
        .catch(error => {
          console.log(error)
        })
      };
      fetchData();
    },[])
        
              
      if (!rwState) {return <h1>loading</h1>}
      else {
  
    return (
      
      <AppContainer>
        <HeaderBox>
          <PageHeader>React Stars</PageHeader>
          <PageHeader2>May the force be with you.</PageHeader2>
        </HeaderBox>
        {rwState.map((Character,index) => <DataCard key= {index} starName={Character}/>)}
      </AppContainer>
     
    )};
    
  }
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


export default App;
