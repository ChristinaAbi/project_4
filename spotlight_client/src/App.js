import React, { useState, useEffect } from 'react';
import Artists from './components/Artists'

export default function App(props) {
  const [artists, setArtists] = useState([])
  const [formInputs, updateFormInputs] = useState({
    author: "",
    content: "",
    title: ""
  })

  const handleChange = (event) => {
    const updateInput = Object.assign({}, formInputs, { [event.target.id]: event.target.value })
    updateFormInputs(updateInput)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formInputs)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>
          Spotlight Artists
        </h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="artist">Artist Name: </label>
            <input 
              type="text" 
              id="name" 
              value={formInputs.name}
              onChange={handleChange}/>
            <label htmlFor="biography">Biography: </label>
            <input 
              type="text-area" 
              id="biography" 
              value={formInputs.biography}
              onChange={handleChange}/>
            <label htmlFor="age">Age :</label>
            <input 
              type="text" 
              id="age" 
              value={formInputs.age}
              onChange={handleChange}/>
            <label htmlFor="location">Location</label>
            <input 
              type="text" 
              id="location" 
              value={formInputs.location}
              onChange={handleChange}/>
            <input type="submit" className="submit" />
        </form> 
        <main>
          <Artists artists={artists} />
        </main>
      </div>
    </div>
  )
}