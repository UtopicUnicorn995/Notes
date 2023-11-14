import Header from "./componentes/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./componentes/CoreConcept.jsx";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1))
}


function App() {
  return (
    <div>
      <Header genRandomInt={reactDescriptions[genRandomInt(2)]} />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
          <ul>
            {/* {CORE_CONCEPTS.map(core_concept => (
             <CoreConcept title={core_concept.title} description={core_concept.description} image={core_concept.image}/> 
            ))} */}
            <CoreConcept {...CORE_CONCEPTS[0]}/> 
            <CoreConcept {...CORE_CONCEPTS[1]}/> 
            <CoreConcept {...CORE_CONCEPTS[2]}/> 
            <CoreConcept {...CORE_CONCEPTS[3]}/> 
          </ul>
        </section>
        <section>
          <h2>Examples</h2>
          <menu>
            
          </menu>
        </section>
      </main>
    </div>
  );
}



export default App;
