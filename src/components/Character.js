// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterStyles = styled.div`
    color:white;
`


const CharacterData = (props) => {
    return (
        <CharacterStyles>
            {props.character}
        </CharacterStyles>
    )
}


export default CharacterData;