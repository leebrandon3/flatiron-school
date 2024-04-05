/*

Phase 2 -> Forms
By Sakib Rasul

Core Deliverables
1. Refactor <Form> into a "controlled" form. --DONE--
2. Add "Your lucky number is X!" after the two fields, where X is dependent on the two fields. --DONE?--
3. Handle form submissions by appending the new user to a local array. --DONE--
4. Render the array as a list of members in `Form`. --DONE--
5. (Bonus!) Render the list of members in `App` instead of `Form`.

*/

import Form from './Form';
import {useState} from "react"

function App() {
  const [formObj, onFormObj] = useState({
    name: "",
    movie: "",
    number: 2,
    members: []
  })
  // const members = []

  function formUpdate(event){
    onFormObj({...formObj, 
      [event.target.name] : event.target.value,
      number: Math.floor(Math.random() * 10)
    })
  }

  function submitForm(event){
    event.preventDefault()
    onFormObj({...formObj, 
      members: [...formObj.members, {
        name: formObj.name,
        movie: formObj.movie,
        number: formObj.number
      }]
    })
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <header>
        <h1>Luck of the Screen</h1>
      </header>
      <Form formUpdate={formUpdate} formObj={formObj} submitForm={submitForm}/>
    </div>
  );
}

export default App;
