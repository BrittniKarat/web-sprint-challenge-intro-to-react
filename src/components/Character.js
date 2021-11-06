import React, { useState } from 'react';
import styled from 'styled-components';
import { Spinner } from "reactstrap";

const CharacterStyles = styled.div`
   align-items: center;
   background-color: ${pr => pr.theme.secondaryColor};
   border-radius: 4px;
   color: ${pr => pr.theme.primaryColor};
   display: flex;
   font-size: 3rem;
   justify-content: center;
   margin: 1% 0;
   padding: 1% 0;
   width: 40%;

   @media(max-width:1100px){
      font-size: 2.3rem;
      margin: 2% 0;
      padding: 3.5% 0;
      width: 60%;
   }

   @media(max-width:800px){
       font-size: 2rem;
       margin: 2% 0;
       padding: 5% 0;
       width: 67%; 
   }

   @media(max-width:500px){
      font-size: 1.5rem;
      font-weight: bold;
      margin: 3% 0;
      padding: 5% 0;
      width: 60%;
   }
  
`


const CharacterData = (props) => {
    const [clicked, setClicked] = useState(0);
    
    const basic = <p>{props.character}</p>;
    const info = <p> {props.character} was born in the year {props.birth_year}.</p>;
    const films = <div> {props.character} has been in the following films: <br/> {props.films.map(ea=> <ul key={ea}> {ea} </ul>)} </div>;
    
    return (
        <CharacterStyles onClick={() => setClicked(clicked + 1)}>
            {clicked === 0 ? <Spinner color="warning" type="grow" size='sm'/> : null }
            {clicked === 0 ? basic : ( clicked === 1 ? info :( clicked === 2 ? films : setClicked(0))) }
            {clicked === 0 ? <Spinner color="warning" type="grow" size='sm'/> : null }
        </CharacterStyles>
    )
}

export default CharacterData;