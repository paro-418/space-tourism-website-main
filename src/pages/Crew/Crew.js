import BodyPart from "../../components/bodypart/BodyPart";
import Button from "../../components/Button/Button";
import classes from "./Crew.module.css";
import anousheh from "../../starter-code/assets/crew/anousheh.png";
import douglas from "../../starter-code/assets/crew/douglas.png";
import mark from "../../starter-code/assets/crew/mark.png";
import victor from "../../starter-code/assets/crew/victor.png";
import data from "../../data/data.json";
import { useState } from "react";
const photos = [
  { name: "Anousheh Ansari", image: anousheh },
  { name: "Mark Shuttleworth", image: mark },
  { name: "Douglas Hurley", image: douglas },
  { name: "Victor Glover", image: victor },
];

const crewMembers = data.crew;
console.log(crewMembers);
const Crew = () => {
  const [currentCrew, setCurrentCrew] = useState("Anousheh Ansari");
  console.log(currentCrew);

  const crewChangeHandler = (event) => {
    setCurrentCrew(event.target.value);
  };
  const currentPhoto = photos.filter((obj) => obj.name === currentCrew);

  const showCrew = crewMembers.filter((obj) =>
    obj.name.toLowerCase().includes(currentCrew.toLowerCase())
  );
  console.log(showCrew);

  return (
    <main className={classes.crew}>
      <BodyPart>
        <div className={classes.left}>
          <h2 className={classes.subHeading}>02 Meet Your Crew</h2>

          <p className={classes.designation}>{showCrew[0].role}</p>
          <p className={classes.name}>{showCrew[0].name}</p>
          <p className={classes.description}>{showCrew[0].bio}</p>
          <div className={classes.dotContainer}>
            {photos.map((obj) => (
              <Button
                callFunction={crewChangeHandler}
                value={obj.name}
                className={`${classes.dot} ${
                  obj.name === currentCrew ? classes.selected : ""
                } `}
              ></Button>
            ))}
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.crewImage}>
            <img src={currentPhoto[0].image} />
          </div>
        </div>
      </BodyPart>
    </main>
  );
};

export default Crew;
