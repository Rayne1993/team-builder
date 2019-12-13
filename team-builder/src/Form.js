import React, { useState } from "react";

const Form = ({addNewTeam}) => {
    const [team, setTeam] = useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = event => {
        setTeam({...team,[event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        addNewTeam(team);

        setTeam({ name: "", email: "", role: ""});
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" name="name" onChange={handleChanges} />

            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" onChange={handleChanges} />

            <label htmlFor="role">Role:</label>
            <input id="role" type="text" name="role" onChange={handleChanges} />

            <button type="submit">Add Member</button>
        </form>
    );
};

export default Form