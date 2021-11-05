import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';


const StyledDetails = styled.div`
    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.primaryColor};
`

const Details = (props) => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        axios
          .get(`https://swapi.dev/api/people`)
          .then((res) => {
            console.log(res);
            setDetails(res.data);
          })
          .catch((err) => console.error(err));
      }, []);

      return(
        <StyledDetails>
            <p> {details.name} was born on {details.birth_year}.</p>
            <p>Current Stats</p>
            <ul>
                <li>Hair color: {details.hair_color}</li>
                <li>Eye color: {details.eye_color}</li>
                <li>Skin color: {details.skin_color}</li>
                <li>Height: {details.height}</li>
                <li>Mass: {details.mass}Kgs</li>
            </ul>

        </StyledDetails>
        

      )

}

export default Details;