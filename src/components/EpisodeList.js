import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import styled from 'styled-components'
const ListCards = styled.div`
width: 98%;
height: 100%;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
margin: 2% auto

`;
export default function EpisodesList() {
  const [episodeList, setEpisodeList] = useState();
  const [episodeSearch, setEpisodeSearch] = useState('');

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
      .then(res =>{
        console.log(res.data.results);
        setEpisodeList(res.data.results)
      })
      .catch(err => console.log('Error: ', err));
  }, []);

  if (!episodeList) {
    return <p>Loading data...</p>
  }

  const searchOnChange = (e) => {
    setEpisodeSearch(e.target.value);
  }

  let filteredList = episodeList.filter(episodeName => episodeName.name.indexOf(episodeSearch) !== -1)

  return (
    <div>
      <input 
        className="search_name"
        type="text"
        placeholder="Search episode..."
        value={episodeSearch}
        onChange={searchOnChange}
      />
      <ListCards>
        {filteredList.map((episode, index) => <EpisodeCard episode={episode} key={index}/>)}
      </ListCards>
    </div>
  );
}