import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions";
const FriendsList = props => {
  console.log(props);
  useEffect(() => {
    props.getFriends();
  }, []);
  return (
    <section className="friends-list">
      <h1>Friends List</h1>
      {props.state.friends.map(element => (
        <div class="card">
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
