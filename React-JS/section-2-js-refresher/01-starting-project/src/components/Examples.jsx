import { useState } from 'react';
import TabButton from '../components/TabButton.jsx';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
      // selectedButton => 'components', 'jsx', 'props', 'state'
      setSelectedTopic(selectedButton);
      // console.log(selectedTopic);
    }
  
    console.log('APP COMPONENT EXECUTING');
  
    let tabContent = <p>Please select a topic.</p>;
  
  

    if (selectedTopic) {
        tabContent = (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        );
      }

      const tabsContent = (
        <>
            <TabButton
            isSelected={selectedTopic === 'components'}
            onClick={() => handleSelect('components')}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'jsx'}
            onClick={() => handleSelect('jsx')}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'props'}
            onClick={() => handleSelect('props')}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'state'}
            onClick={() => handleSelect('state')}
          >
            State
          </TabButton></>
      )

    return(
        <Section id="examples" title='Examples'>
          <Tabs ButtonsContainer='menu' buttons={tabsContent}>{tabContent}</Tabs>
          {/* Using built in component -> use it as a string; custom component just use the function name without invoking it*/}
      </Section>
    )
}