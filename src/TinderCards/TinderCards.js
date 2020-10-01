import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import Axios from "../Axios";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    (async () => {
      const req = await Axios.get("/cards");
      setPeople(req.data.rows);
    })();
  }, []);

  const swipe = (direction, nameToDelete) => {
    console.log("Removing");
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen`);
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onCardLeftScreen={() => outOfFrame(person.name)}
            onSwipe={(dir) => swipe(dir, person.name)}
          >
            <div style={{ backgroundImage: `url(${person.imgUrl})` }} className="card">
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
