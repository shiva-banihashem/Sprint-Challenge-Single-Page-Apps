import React from "react";
import { Link } from 'react-router-dom';




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
  