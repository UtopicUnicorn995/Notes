import './Card.css'

function Card(props){
    console.log(props)
    const classes = 'card ' + props.className
    // children is a reserved word
    return <div className={classes}>{props.children}</div>
}

export default Card