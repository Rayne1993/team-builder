import React from "react";
const Teams = props => {
    return (
        <div className="team-list">
            {props.teams.map(team => (
                <div className="team" key={team.id}>
                    <h2>{team.name}</h2>
                    <h3>{team.email}</h3>
                    <h4>{team.role}</h4>
                </div>
            ))}
        </div>
    )
}

export default Teams;