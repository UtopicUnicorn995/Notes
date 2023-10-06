import './Card.css'

function Card(props){
    const classes = 'card ' + props.className
    // children is a reserved word
    return <div className={classes}>{props.children}</div>
}

export default Card