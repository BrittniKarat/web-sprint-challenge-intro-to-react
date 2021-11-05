// Adding useEffect and useState
import React, { useEffect, useState } from "react";
import "./App.css";
// Importing axios to GET API data
import axios from "axios";
// Importing CharacterData and Details to put on the DOM
import CharacterData from "./components/Character";

// Importing styling
import styled from "styled-components";

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    background-color: ${(pr) => pr.theme.tertiaryColorBG};
    color: ${(pr) => pr.theme.secondaryColor};
    padding: 1% 0;
    border-radius: 4px;
    text-shadow: 2px 2px 4px ${(pr) => pr.theme.primaryColor};
    width: 40%;
    margin-top: 2%;
    font-size: 5rem;
    border-bottom: 6px solid; 
    font-weight: bold;
  }

  @media(max-width:1100px){
    h1{
      text-shadow: 5px 5px 18px ${(pr) => pr.theme.primaryColor};
      border-bottom: 10px solid; 
      width: 60%;
      font-size: 5rem;
      padding: 5% ;
      margin: 5% 0;
    }
  }

  @media(max-width:800px){
    h1{
    width: 70%;
    font-size: 4rem;
    padding: 5% 0 2% 0;
    margin: 4% 0;
    }
  } 

  @media(max-width:550px){
    h1{
    font-size: 3rem;
    }
  }
  `


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <AppDiv className="App">
      <h1 className="Header">Characters</h1>
      {data.map(each => 
        <CharacterData 
        character={each.name} 
        key={each.mass}/>)}

    </AppDiv>
  );
  
};

export default App;
