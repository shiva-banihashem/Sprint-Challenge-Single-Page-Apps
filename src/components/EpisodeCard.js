import React from "react";
import styled from 'styled-components'
const DisplayCard = styled.div`
padding:2%
height: 100%;
display:block;
margin:2% auto
color:darkblue;
border:1px solid blue;

`;
export default function EpisodeCard(props) {
  const { name, episode, air_date, characters } = props.episode;
  return (
    <DisplayCard>
      <h2>{name}</h2>
      <h3>{episode}</h3>
      <h3>Aired: {air_date}</h3>
      <h3>{characters.length} Characters</h3>
    </DisplayCard>
  )
}