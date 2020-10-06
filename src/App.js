
import React from 'react';
import './components/App.css';
import './components/DisplayContacts';



class App extends React.Component {

  state = {
    persons: [
      { name: "Frank", number: "0151 123 4567" },
      { name: "Jimmy", number: "0141 345 6789" }
    ]
  }



  render() {

    return (
      <div>
        <h1>Contact List</h1>
        <hr></hr>


        <h4>{this.state.persons[0].name}</h4>
        <h4>{this.state.persons[0].number}</h4>


        <hr></hr>

        <button>Add Contact</button>
        <button>Remove Contact</button>
      </div>
    )
  }

}


export default App;

