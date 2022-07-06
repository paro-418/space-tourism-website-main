import classes from "./BodyPart.module.css"

const BodyPart = (props) => {
    return <article className={`${classes.bodyPart} ${props.className}`}>
        {props.children}
    </article>
}

export default BodyPart;