import Card from "./Card";
import Button from "./Button";
import '../CSS/errorModal.css'

export default function ErrorModal (props){
    return (
        <div >
            <div className="backdrop" onClick={props.closeModal}></div>
        <Card className=" modal">
            <header className="header">
                <h2>
                    {props.title}
                </h2>
            </header>
            <div className="content">
                <p className="message">
                    {props.message}
                </p>
            </div>
            <footer className="actions">
            <Button  onClick={props.closeModal} >Close</Button>
            </footer>
        </Card>
        </div>
    )
}