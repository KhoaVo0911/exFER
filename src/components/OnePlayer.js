import React from "react";
import { Players } from "./ListOfPlayers";
// import { Players } from "./ListOfPlayers";
// import Players from "../shared/ListOfPlayers.js";
import Footer from "../Footer";

function OnePlayer() {
  return (
    <>
      {Players.map((player) => (
        <div className="container">
        <div className="column" key={player.id}>
          <div className="card">
            <img src={player.img} alt=""/>
            <h3>{player.name} </h3>
            <p className="title">{player.club}</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>
        </div>
      ))}
    </>
    
  );
}

export default OnePlayer;
