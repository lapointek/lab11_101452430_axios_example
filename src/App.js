import { Component } from 'react'
import axios from 'axios'
import './App.css';

class App extends Component{
  state = {
    persons : []
  } 
  render()
  {
    return (
        <div>
            {this.state.persons.map(person => (
                <div class="container">
                  <div class="image-container">
                    <img class="image" src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} />
                    <button class="button" onClick={() => this.setState({ showDetails: true })}>Details</button>
                  </div>
                  
                  {this.state.showDetails && (
                    <div class="info">
                      <h3>Name: {person.name.first} {person.name.last}</h3>
                      <p>Location: {person.location.city},{person.location.state}, {person.location.country}</p>
                      <p>Age: {person.dob.age}</p>
                      <p>Phone: {person.phone}</p>
                      <p>Gender: {person.gender}</p>
                      <p>Email: {person.email}</p>
                    </div>
                  )}
                </div>
             ))}
        </div>
      );
  }

  componentDidMount() 
  {
    axios.get(`https://randomuser.me/api/?results=10`)
    .then(res => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
    })
    .catch(error =>{
      console.error(error)
    })
  }
}

export default App;
