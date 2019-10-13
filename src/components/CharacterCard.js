import React from "react";
import styled from 'styled-components'
const DisplayCard = styled.div`
height: 100%;
display:flex;
margin: 2% auto
color:darkblue;
`;

export default function CharacterCard(props) {
  const { image, name, location, species, status, origin } = props.char
  
  return (
    <DisplayCard>
    <div className="card">
      <img src={image} alt={name}/>
      <div className="card-text">
        <h2>{name}</h2>
        <p className="status">{species} {status}</p>
        <div className="locations">
          <p>Location: {location.name}</p>
          <p>Origin: {origin.name}</p>
        </div>
      </div>
      
      
    </div>
    </DisplayCard>
  )
}