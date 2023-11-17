import { useState } from "react";
import Header from "./componentes/Header.jsx";
import TabButton from "./componentes/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import CoreConcept from "./componentes/CoreConcept.jsx";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1))
}


function App() {

  const [tabContent, setTabContent] = useState()

  function handleSelect(selectedButton){
    // selectedButton => 'components', ''jsx , 'props'
    setTabContent(selectedButton)
  }
  console.log(tabContent)

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
            
              {!tabContent ? <p>Please select a topic.</p> : 
              <div id="tab-content">
                 <h3>
                {EXAMPLES[tabContent].title}
              </h3>
              <p>
              {EXAMPLES[tabContent].description}
              </p>
              <pre>
                <code>
                {EXAMPLES[tabContent].code}
                </code>
              </pre>
            </div>
              }
        </section>
      </main>
    </div>
  );
}



export default App;
