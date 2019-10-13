import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';
import styled from 'styled-components'

const ListCards = styled.div`
width: 98%;
height: 100%;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
margin: 2% 2%

`;
export default function CharacterList() {
  const [charList, setCharList] = useState();
  const [charSearch, setCharSearch] = useState('');

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res =>{
        console.log(res.data);
        setCharList(res.data.results)
      })
      .catch(err => console.log('Error: ', err));

  }, []);

  if (!charList) {
    return <p>Loading data...</p>
  }

  const searchOnChange = (e) => {
    setCharSearch(e.target.value);
  }

  let filteredList = charList.filter(charName => charName.name.toLowerCase().indexOf(charSearch.toLowerCase()) !== -1)

  return (
    <div>
      <input 
        className="search_name"
        type="text"
        placeholder="Search Character..."
        value={charSearch}
        onChange={searchOnChange}
      />
      <ListCards>
        
        {filteredList.map((char, index) => <CharacterCard char={char} key={index}/>)}
        
      </ListCards>
    </div>
  );
}