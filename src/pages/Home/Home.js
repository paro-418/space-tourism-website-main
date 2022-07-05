import BodyPart from "../../components/bodypart/BodyPart";
import Button from "../../components/Button/Button";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <main className={classes.home}>
      <BodyPart className={classes.homeBody}>
        <div className={classes.left}>
          <h3 className={classes.subHead}>so, you want to travel to</h3>
          <h1 className={classes.space}>space</h1>
          <p className={classes.description}>
            Let’s face it if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={classes.right}>
          <Button className={classes.explore}>Explore</Button>
        </div>
      </BodyPart>
    </main>
  );
};

export default Home;
