import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';

export default function CharacterList() {
  const [charList, setCharList] = useState();
  const [charSearch, setCharSearch] = useState('');

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res =>{
        setCharList(res.data.results)
      })
      .catch(err => console.log('Error: ', err));

  }, []);

  if (!charList) {
    return <p>Loading data...</p>
  }

  const filterOnChange = (e) => {
    setCharSearch(e.target.value);
  }

  let filteredList = charList.filter(charName => charName.name.indexOf(charSearch) !== -1)

  return (
    <div>
      <input 
        className="search_name"
        type="text"
        placeholder="Search Character..."
        value={charSearch}
        onChange={filterOnChange}
      />
      <div className="character-list grid-view">
        {filteredList.map((char, index) => <CharacterCard char={char} key={index}/>)}
      </div>
    </div>
  );
}