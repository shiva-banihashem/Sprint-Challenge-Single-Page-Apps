import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';
import styled from 'styled-components'
const ListCards = styled.div`
width: 98%;
height: 100%;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
margin: 2% auto

`;
export default function LocationsList() {
  const [locationList, setLocationList] = useState();
  const [locationSearch, setLocationSearch] = useState('');

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/')
      .then(res =>{
        setLocationList(res.data.results)
      })
      .catch(err => console.log('Error: ', err));
  }, []);

  if (!locationList) {
    return <p>Loading data...</p>
  }
  const searchOnChange = (e) => {
    setLocationSearch(e.target.value);
  }
  let filteredList = locationList.filter(location => location.name.indexOf(locationSearch) !== -1)


  return (
    <div>
    <input 
        className="search_name"
        type="text"
        placeholder="Search Locations..."
        value={locationSearch}
        onChange={searchOnChange}
      />
    <ListCards>
      {filteredList.map((location, index) => <LocationCard location={location} key={index}/>)}
    </ListCards>
    </div>
  );
  }