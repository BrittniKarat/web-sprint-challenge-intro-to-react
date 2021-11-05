// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import reactStrap, { Spinner, PopoverBody, Popover } from "reactstrap";

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
    const [dataOn, setDataOn] = useState(false);

    const toggle = () => setDataOn(!dataOn);
    

    return (
        <CharacterStyles 
        id='button'
        >
            <Spinner className={dataOn} color="warning" type="grow" size='sm' />
            {props.character}
            <Spinner color="warning" type="grow" size='sm' />
        </CharacterStyles>
    )
}


export default CharacterData;