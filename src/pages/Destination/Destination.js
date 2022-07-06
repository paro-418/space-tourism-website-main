import BodyPart from "../../components/bodypart/BodyPart";
import classes from "./Destination.module.css";
import mars from "../../starter-code/assets/destination/image-mars.png";
import moon from "../../starter-code/assets/destination/image-moon.png";
import titan from "../../starter-code/assets/destination/image-titan.png";
import europa from "../../starter-code/assets/destination/image-europa.png";
import Button from "../../components/Button/Button";
import data from "../../data/data.json";
import { useState, useEffect } from "react";

const photos = [
  { name: "moon", image: moon },
  { name: "mars", image: mars },
  { name: "titan", image: titan },
  { name: "europa", image: europa },
];
const planets = data.destinations;
console.log(planets);

const Destination = () => {
  const [currentPlanet, setCurrentPlanet] = useState("mars");

  const currentPhoto = photos.filter((obj) => obj.name === currentPlanet);
  const currentShowing = planets.filter(
    (obj) => obj.name.toLowerCase() === currentPlanet
  );
  // const currentTravelTime = planets.filter(obj.name)
  const btnValueHandler = (event) => {
    setCurrentPlanet(event.target.value);
  };

  return (
    <main className={classes.destination}>
      <BodyPart>
        <div className={classes.left}>
          <h2 className={classes.subHeading}>01 pick your destination</h2>
          <div className={classes.imgContainer}>
            <img src={currentPhoto[0].image} />
          </div>
        </div>
        <div className={classes.right}>
          <nav className={classes.btnNav}>
            <ul className={classes.btnUl}>
              {photos.map((obj) => (
                <li className={classes.btnLi}>
                  <Button
                    callFunction={btnValueHandler}
                    value={obj.name}
                    className={classes.btn}
                  >
                    {obj.name}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
          <h1 className={classes.planetName}>{currentPlanet}</h1>
          <p className={classes.planetDescription}>
            {currentShowing[0].description}
          </p>

          <div className={classes.disTime}>
            <div className={classes.dist}>
              <h5 className={classes.h5}>avg. distance</h5>
              <p>{currentShowing[0].distance}</p>
            </div>
            <div className={classes.time}>
              <h5 className={classes.h5}>est. travel time</h5>
              <p>{currentShowing[0].travel}</p>
            </div>
          </div>
        </div>
      </BodyPart>
    </main>
  );
};

export default Destination;
