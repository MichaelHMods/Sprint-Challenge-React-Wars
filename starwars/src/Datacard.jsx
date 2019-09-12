import React from "react";
import Apps from './App';
import styled from "styled-components"

const Card = styled.div`
width: 90%;
display:flex;
justify-content: space-around;
`
const CardContainer = styled.div`
    width: 35%;
    border: 1px solid black;
    margin: 4% 0;
    background: gold;


  `
const CardHead = styled.h4`
    font-size: 1.6rem;
    padding 5%;
    `
const CardDetails = styled.h4`
    font-size: 1.9rem;
    padding 5%;
    `

function DataCard(props) {
    console.log(props.starName)
    return (
        <Card>  
            <CardContainer>
                <CardHead>Name: {props.starName.name}</CardHead>
                <CardDetails>Height:{props.starName.height}cm</CardDetails>
                <CardDetails>Mass{props.starName.mass}kg</CardDetails>

            </CardContainer>
        </Card>
    
    
    )
}

export default DataCard;
