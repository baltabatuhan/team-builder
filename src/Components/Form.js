import React, { useState } from "react";
import ReactDOM from "react-dom";

const Form = (props) => {
  const [note, setNote] = useState({
    name: "",
    email: "",
    role: "",
  });
  const changeHandler = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.addNewNote(note);
    setNote({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        id="name"
        type="text"
        placeholder="Name"
        onChange={changeHandler}
        value={note.name}
      />

      <label htmlFor="email">Email</label>
      <input
        name="email"
        id="email"
        type="text"
        placeholder="e-mail"
        onChange={changeHandler}
        value={note.email}
      />

      <label htmlFor="role">Role</label>
      <input
        name="role"
        id="role"
        type="text"
        placeholder="Role"
        onChange={changeHandler}
        value={note.role}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
