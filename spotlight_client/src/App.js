import React, {useState, useEffect} from 'react';
import Artists from './components/Artists'

export default function App (props) {
  return (
    <div className="App">
      <h1>
        Spotlight Artists
      </h1>
      <main>
        <Artists />
      </main>
      
    </div>
  )
}