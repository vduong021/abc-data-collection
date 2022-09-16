
import React, { useEffect, useState } from 'react';
import Log from './Log.jsx';

const FormContainer = () => {

  const [formData, setformData] = useState([]);
  const [clientInitials, setClientInitials] = useState('');
  const [date, setDate] = useState('');
  const [behavior, setbehavior] = useState('');
  const [antecedent, setantecedent] = useState('');
  const [consequence, setconsequence] = useState('');
  const [settingEvents, setsettingEvents] = useState('');

  useEffect(()=> {
    fetch('/index')
    .then (response => response.json())
    .then(data =>{
        console.log('this is in fetch',data);
        return setformData(data);
    }
    ).catch ((error) => {
        console.log('error', error)
      }
    )
  },[])
  

  
  //helper function for the api call
  const addForm = () => {
    //declare new object 
    const data = {
      clientInitials: clientInitials,
      date: date,
      behavior: behavior,
      antecedent: antecedent,
      consequence: consequence,
      settingEvents: settingEvents
    }
    
    fetch('/index',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
       
      console.log('Success:', data);
      return setformData(data)
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  const log = formData.map((el, index) =>
    <Log className='logBoxes' key = {index} data = {el}/>
  )

  return (
    <>
      <div className='formContainer'>
        <h3>ABC Data Collection</h3>
        <div>
          <label htmlFor="">Initials: </label> 
          <input 
            type="text" 
              onChange={(e) => setClientInitials(e.target.value)}
            /> 
          <label htmlFor=""> Date: </label> 
          <input 
            type="text" 
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          Behavior of Concern
        </div>
        <div>
          <input 
            className='long'
            type="text" 
            onChange={(e) => setbehavior(e.target.value)}
          />
        </div>
        <div>
          Antecedent: What happened immediately before the behavior?
        </div>
        <div>
          <input
            className='long' 
            type="text" 
            onChange={(e) => setantecedent(e.target.value)}
          />
        </div>
        <div>
          Consequences: What happened immediately after the behavior?
        </div>
        <div>
          <input className='long'
            type="text" 
            onChange={(e) => setconsequence(e.target.value)}
          />
        </div>
        <div>
          Setting Events: Potential environmental changes that may influences behaviors
        </div>
        <div>
          <input 
            className='long'
            type="text" 
            onChange={(e) => setsettingEvents(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => addForm()}>Submit</button>
        </div> 
      </div>
      <div className='displayLogs'>
        <h4>Logs</h4>
        {/* <Log /> */}
        <div className='logContainer'>
          {log}
        </div>
        
      </div>
    </>
  )
}

export default FormContainer