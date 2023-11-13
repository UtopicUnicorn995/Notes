import '../CSS/card.css'

export default function Card(props){
    return(
        <div className={`${props.className} card`} >
            {props.children}
        </div>
    )
}