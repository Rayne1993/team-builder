import React, { useState } from 'react';
import './App.css';

import Form from './Form';
import Teams from './Team';

function App() {
  const [teams, setTeams] = useState([
    {
      name: "Jessica",
      email: "rayne1993@gmail.com",
      role: "Full Stack Web Developer"
    }
  ]);

  const addNewTeam = team => {
    const newTeam = {
      name: team.name,
      email: team.email,
      role: team.role
    }

    setTeams([...teams, newTeam])
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addNewTeam={addNewTeam}/>
      <Teams teams={teams} />
    </div>
  );
}

export default App;
