import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFriend } from "../actions";
const AddFriend = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const addNewFriend = (e, friend) => {
    e.preventDefault();
    console.log(friend);
    props.addFriend(friend).then(() => props.history.push("/"));
  };
  return (
    <section className="add-friend">
      <div className="form-container">
        <h2>Add Friend</h2>
        <form onSubmit={e => addNewFriend(e, { name, age, email })}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <label htmlFor="Age">Age</label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={e => setAge(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button>Add Friend</button>
          <button
            className="secondary"
            onClick={e => {
              e.preventDefault();
              props.history.push("/");
            }}
          >
            Go Home
          </button>
        </form>
      </div>
    </section>
  );
};

export default connect(
  null,
  { addFriend }
)(AddFriend);
