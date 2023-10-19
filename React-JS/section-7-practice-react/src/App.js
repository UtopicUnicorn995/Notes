import {useState} from 'react'
import Header from './components/Header';
import InputForm from './components/InputForm';
import Table from './components/Table';

function App() {
  const yearlyData = []; // per-year results
  
  const calculateHandler = (userInput) => {
    userInput.preventDefault()
    console.log('fod')
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    

    let currentSavings = +userInput.target['current-savings'].value; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.target['yearly-contribution'].value; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.target['expected-return'].value / 100;
    const duration = +userInput.target['duration'].value;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    console.log(yearlyData)
    // do something with yearlyData ...
  };

  return (
    <div>
      <Header/>
      <InputForm calculateHandler={calculateHandler}/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {
        <Table data={yearlyData}/>
      }
    </div>
  );
}

export default App;
