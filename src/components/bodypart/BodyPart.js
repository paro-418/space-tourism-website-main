import classes from "./BodyPart.module.css"

const BodyPart = (props) => {
    return <main className={`${classes.bodyPart} ${props.className}`}>
        {props.children}
    </main>
}

export default BodyPart;