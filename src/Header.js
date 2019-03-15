import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <header className="container-fluid justify-content-center bg-info">
    <br></br>
     <h2 className=" text-center text-dark">Minesweeper</h2><br></br>
      <div className="text-center"><NavLink to="/"><button>Home</button></NavLink> | <NavLink to="/play"><button>Play Game</button></NavLink> | <NavLink to="/board"><button>LeaderBoard</button></NavLink>
      </div><br></br> </header>
  )
}



export default Header;