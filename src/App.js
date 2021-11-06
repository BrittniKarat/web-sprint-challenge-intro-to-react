// Adding useEffect and useState
import React, { useEffect, useState } from "react";
import "./App.css";
// Importing axios to GET API data
import axios from "axios";
// Importing CharacterData and Details to put on the DOM
import CharacterData from "./components/Character";

// Importing styling
import styled from "styled-components";

// Alphabetized styles
const AppDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  

  h1{
    background-color: ${(pr) => pr.theme.tertiaryColorBG};
    border-bottom: 6px solid; 
    border-radius: 4px;
    color: ${(pr) => pr.theme.secondaryColor};
    font-size: 5rem;
    font-weight: bold;
    margin-top: 2%;
    padding: 1% 0;
    text-shadow: 2px 2px 4px ${(pr) => pr.theme.primaryColor};
    width: 40%;
  }

  @media(max-width:1100px){
    h1{
      border-bottom: 10px solid;
      font-size: 5rem;
      margin: 5% 0;
      padding: 5% ;
      text-shadow: 5px 5px 18px ${(pr) => pr.theme.primaryColor};
      width: 60%;
    }
  }

  @media(max-width:800px){
    h1{
    font-size: 4rem;
    margin: 4% 0;
    padding: 5% 0 2% 0;
    width: 70%;
    }
  } 

  @media(max-width:550px){
    h1{
    font-size: 3rem;
    }
  }
  `


const App = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
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
        key={each.mass}
        birth_year={each.birth_year}
        films={each.films}
        />)}
    </AppDiv>
  );
};

export default App;
