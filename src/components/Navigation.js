import React from "react";
import { Link } from 'react-router-dom';

import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
import EpisodeList from './EpisodeList';


export default function Navigation() {
    return (
        <div>
      <nav >
      
          <Link  to="/homepage">Home</Link>
          <Link  to="/characters">Charactors</Link>
          <Link  to="/locations">Locations</Link>
          <Link  to="/episodes">Episodes</Link>
      
      </nav>
      </div>
    );
  }
  