import classes from "./Technology.module.css";
import Button from "../../components/Button/Button";
import BodyPart from "../../components/bodypart/BodyPart";
import vehicle from "../../starter-code/assets/technology/vehicle.jpg";
import spaceport from "../../starter-code/assets/technology/spaceport.jpg";
import capsule from "../../starter-code/assets/technology/capsule.jpg";
import data from "../../data/data.json";
import { useState } from "react";

const technology = data.technology;
console.log(technology);
const photo = [
  { no: 1, name: "vehicle", image: vehicle },
  { no: 2, name: "spaceport", image: spaceport },
  { no: 3, name: "capsule", image: capsule },
];
const Technology = () => {
  const [currentTech, setCurrentTech] = useState("vehicle");
  const changeInfohandler = (event) => {
    console.log(event.target.value);
    setCurrentTech(event.target.value);
  };
  const showTech = technology.filter((obj) =>
    obj.name.toLowerCase().includes(currentTech)
  );
  const showPhoto = photo.filter((obj) =>
    obj.name.toLowerCase().includes(currentTech)
  );
  return (
    <main className={classes.technology}>
      <BodyPart>
        <div className={classes.left}>
          <h2 className={classes.subHeading}>03 space launch 101</h2>
          <div className={classes.subContainer}>
            <div className={classes.btnContainer}>
              {photo.map((obj, index) => (
                <Button
                  key={index}
                  callFunction={changeInfohandler}
                  className={classes.btn}
                  value={obj.name}
                >
                  {obj.no}
                </Button>
              ))}
            </div>
            <div className={classes.textContainer}>
              <h5 className={classes.terminology}>the terminology...</h5>
              <h1 className={classes.heading}>{showTech[0].name}</h1>
              <p className={classes.description}>{showTech[0].description}</p>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.imgContainer}>
            <img src={showPhoto[0].image} />
          </div>
        </div>
      </BodyPart>
    </main>
  );
};

export default Technology;
