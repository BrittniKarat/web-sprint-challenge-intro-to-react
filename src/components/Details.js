import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';


const StyledDetails = styled.div`
    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.sceondaryColor};

    .person{
        display:none;
    }

`

const Details = (props) => {
      return(
          <StyledDetails className='person'>
            <p> {props.name} was born on {props.birth_year}.</p>
            <p>Current Stats</p>
            <ul>
                <li>Hair color: {props.hair_color}</li>
                <li>Eye color: {props.eye_color}</li>
                <li>Skin color: {props.skin_color}</li>
                <li>Height: {props.height}</li>
                <li>Mass: {props.mass}Kgs</li>
            </ul>
            </StyledDetails>
      )

}

export default Details;