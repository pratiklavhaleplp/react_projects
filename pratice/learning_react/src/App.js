import './App.css';
import React from 'react';
import FirstComponent from './component/first-component';
import SecondComponent from './component/SecondComponent';
import ThirdComponent from './component/ThirdComponent';
import HOC from './component/HOC/HOC';
import StateLessFunctionalComponent from './component/HOC/StateLessFunctionalComponent';
import FourthCounterImplementation from './component/FourthCounterImplemetation';
import JsonSchema from './component/JsonSchema';
function App() {
  const EnhancedComponent = HOC(StateLessFunctionalComponent);
  const ThirdComponentEnhanced = HOC(ThirdComponent);
  const schema = {
    type: 'object',
    properties: {
      firstName: { type: 'string', default: 'Dan' },
      lastName: { type: 'string', default: 'Abramov' },
    },
  }
  return (
    <div className="App">
      <div className='flex-item'>
        FirstComponent
        <FirstComponent />
      </div>
      <div className='flex-item'>
        SecondComponent
        <SecondComponent />
      </div>
      <div className='flex-item'>
        ThirdComponent: Prop Validation Component
        <ThirdComponent prop2={27} user={{ name: 'pratik', surname: 'lavhale' }} />
      </div>
      <div className='flex-item'>
        ThirdComponent: Prop Validation Component + EnhancedProperties(inner width)
        <ThirdComponentEnhanced prop2={27} user={{ name: 'pratik', surname: 'lavhale' }} />
      </div>
      <div className='flex-item'>
        EnhancedComponent: HOC Implementation.
        <EnhancedComponent />
      </div>
      <div className='flex-item'>
        FourthComponent: CounterImplementation
        <FourthCounterImplementation />
      </div>
      <div className='flex-item'>
        JsonSchema: Form Implementation Check how can we implement a dynamic form
        <JsonSchema schema={schema} />
      </div>
    </div>
  );
}

export default App;
