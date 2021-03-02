import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/ProfileCard/Card';

function App() {
  const [ profiles, setProfiles ] = useState([]);

  const getData = () => {
    fetch('player_profile_data__2_.json', {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(json){
        setProfiles(json);
      });
  }

  useEffect(() => {
    setTimeout(() => {
      getData()
    }, 3000)
  }, []);

  return (
    <div className="App">
      <Card profile={profiles ? profiles[0] : {}}></Card>
    </div>
  );
}

export default App;
