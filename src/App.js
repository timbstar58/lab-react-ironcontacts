import contacts from "./contacts.json";
import './App.css';
import React from 'react'

class App extends React.Component {

  state = {
    displayedContacts: contacts.slice(0,5)
  }

  randomContact = () => {
    let randomNumber = Math.floor(Math.random() * contacts.length)
    this.setState((state) => ({
    displayedContacts: [...state.displayedContacts, contacts[randomNumber]]
    }));
  }

  sortAlphabet = () => {
    let sorted = this.state.displayedContacts.sort(function(a, b) {
      console.log(a)
  
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    this.setState((state) => ({
    displayedContacts: sorted

    }));
  }

  sortPopular = () => {
    let sorted = this.state.displayedContacts.sort(function(a, b) {
      let nameA = a.popularity;
      let nameB = b.popularity;
      if (nameA < nameB) return 1;
      if (nameA > nameB) return -1;
      return 0;
    });

    this.setState((state) => ({
    displayedContacts: sorted

    }));
  }

  delete = (arr) => {
    console.log(arr)

    const reducedContact = [...this.state.displayedContacts]
    reducedContact.splice(arr,1)

    this.setState((state) => ({
    displayedContacts: reducedContact

    }));
  }

  renderAllInitialsContacts = () => {
    const output = this.state.displayedContacts.map((contact, index) => { 
      let popularitySpliced = String(contact.popularity).slice(0,5)
      return ( 
        <tr key={contact.id}>
          <td><img src={contact.pictureUrl} alt="celeb"/></td>   
          <td>{contact.name}</td>
          <td>{popularitySpliced}</td>
          <td><button onClick={() => this.delete(index)}>Delete</button></td>
        </tr>
      )   
    })
    return output
  }

  render() {
    return  (   
      <div className="App">
        <header className="App-header">
          <p>IronContacts</p>
          <button onClick={this.randomContact}> Add Random Contact</button>
          <button onClick={this.sortAlphabet}> Sort Alphabeticaly</button>
          <button onClick={this.sortPopular}> Sort by Popularity</button>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.renderAllInitialsContacts()}
            </tbody>
          </table>
        </header>
      </div>
    )
  }

}


export default App;
