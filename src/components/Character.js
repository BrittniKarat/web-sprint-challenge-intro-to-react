// Write your Character component here
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';

const CharacterStyles = styled.div`
   color: ${pr => pr.theme.primaryColor};
`


const CharacterData = (props) => {
    return (
        <CharacterStyles>
            {props.character}
        </CharacterStyles>
    )
}


export default CharacterData;