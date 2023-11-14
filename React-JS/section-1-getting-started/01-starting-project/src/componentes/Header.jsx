import reactImg from '../assets/react-core-concepts.png'
import './Header.css'
export default function Header({genRandomInt}){
    return (
        <header>
          {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
          {/* The code above is not a proper usage, might get lost once deployed*/}
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {genRandomInt} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    )
  }