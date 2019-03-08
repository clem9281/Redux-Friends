import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions";
const FriendsList = props => {
  useEffect(() => {
    props.getFriends();
  }, []);
  return (
    <section className="friends-list">
      <div className="header">
        <h1>Friends List</h1>
        <button
          onClick={e => {
            e.preventDefault();
            props.history.push("/add-friend");
          }}
        >
          Add Friend
        </button>
      </div>
      {props.state.friends.map(element => (
        <div className="card" key={element.id}>
          <h2>{element.name}</h2>
          <p>Age: {element.age}</p>
          <p>Email: {element.email}</p>
        </div>
      ))}
    </section>
  );
};
const mapStateToProps = state => {
  return {
    state
  };
};
export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsList);
