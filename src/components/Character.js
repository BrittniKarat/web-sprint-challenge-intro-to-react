import React, { useState } from 'react';
import styled from 'styled-components';
import { Spinner } from "reactstrap";

const CharacterStyles = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 1% 0;
   color: ${pr => pr.theme.primaryColor};
   background-color: ${pr => pr.theme.secondaryColor};
   width: 40%;
   margin: 1% 0;
   border-radius: 4px;
   font-size: 3rem;

   @media(max-width:1100px){
      width: 60%;
      font-size: 2.3rem;
      padding: 3.5% 0;
      margin: 2% 0;
   }
   @media(max-width:800px){
       width: 67%;
      font-size: 2rem;
      padding: 5% 0;
      margin: 2% 0;
   }
   @media(max-width:500px){
       width: 60%;
      font-size: 1.5rem;
      font-weight: bold;
      padding: 5% 0;
      margin: 3% 0;
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