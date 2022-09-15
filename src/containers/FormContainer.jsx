
import React, { useState } from 'react';

const FormContainer = () => {
  
  const [clientInitials, setClientInitials] = useState('');
  const [date, setDate] = useState('');
  const [behavior, setbehavior] = useState('');
  const [antecedent, setantecedent] = useState('');
  const [consequence, setconsequence] = useState('');
  const [settingEvents, setsettingEvents] = useState('');


  
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
    
    fetch('/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  } 


  return (
    <div className='formContainer'>
      
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
          type="text" 
          onChange={(e) => setbehavior(e.target.value)}
        />
      </div>
      <div>
        Antecedent: What happened immediately before the behavior?
      </div>
      <div>
        <input 
          type="text" 
          onChange={(e) => setantecedent(e.target.value)}
        />
      </div>
      <div>
        Consequences: What happened immediately after the behavior?
      </div>
      <div>
        <input 
          type="text" 
          onChange={(e) => setconsequence(e.target.value)}
        />
      </div>
      <div>
        Setting Events
      </div>
      <div>
        <input 
          type="text" 
          onChange={(e) => setsettingEvents(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => addForm()}>Submit</button>
      </div> 
      
    </div>
  )
}

export default FormContainer