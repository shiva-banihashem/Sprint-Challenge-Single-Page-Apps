import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodesList() {
  const [episodeList, setEpisodeList] = useState();
  const [episodeSearch, setEpisodeSearch] = useState('');

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
      .then(res =>{
        setEpisodeList(res.data.results)
      })
      .catch(err => console.log('Error: ', err));
  }, []);

  if (!episodeList) {
    return <p>Loading data...</p>
  }

  const filterOnChange = (e) => {
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
        onChange={filterOnChange}
      />
      <section className="location-list grid-view">
        {filteredList.map((episode, index) => <EpisodeCard episode={episode} key={index}/>)}
      </section>
    </div>
  );
}