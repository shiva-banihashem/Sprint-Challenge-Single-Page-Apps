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
export default function LocationCard(props) {
  const { name, type, dimension, residents } = props.location;
  return (
    <DisplayCard>
      <h2>{name}</h2>
      <h3>{type} - {dimension}</h3>
      <h3>{residents.length} Residents</h3>
    </DisplayCard>
  )
}