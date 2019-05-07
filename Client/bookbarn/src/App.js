import React, {Component} from 'react';
import './App.css'
import { InputBook} from './InputBook'
import { DisplayBook } from './DisplayBook'
import Login from './component/Login'



class App extends Component {

  constructor() {
    // Super makes sure the component is initialized
    super()
    this.state = {
      allbooks: [],
      name: "",
      genre: "",
      publisher:""

    }

  }

    componentDidMount() {

      fetch('http://localhost:8080/api/books')
      .then(response => response.json())
      .then(json => {
        this.setState(
          {allbooks: json}
        )
      })
    }
// When the handleTextChange is called event is automatically passed
// e = event
    handleTextChange = (e)=> {
      this.setState(
        {
          [e.target.name]: e.target.value
        }
      )
    }
    // Create Fetch request and post it to the API
    handleOnSaveClick = () => {
      fetch('http://localhost:8080/api/books', {
        method: 'POST', 
        headers:{
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({
          name: this.state.name,
          genre: this.state.genre,
          publisher: this.state.publisher
        })
      }).then(response => response.json())
      .then(result =>console.log(result))
    }

  render() {
    let allbooks = this.state.allbooks
    let bookItems = allbooks.map((books) => {
      return (
        <div>
          <li>{books.name} - {books.genre} - {books.publisher}</li>
        </div>
      )
    })

    return (
      <div>
        <Login/>
        <input onChange={this.handleTextChange} type="text" name = "name" placeholder= "book name" />
        <input onChange={this.handleTextChange} type="text" name = "genre" placeholder= "genre" />
        <input onChange={this.handleTextChange} type="text" name = "publisher" placeholder= "publisher" />
        <button onClick={this.handleOnSaveClick}>Save</button>
      <ul>{bookItems}</ul>
      </div>
    )
  }

}

export default App;
