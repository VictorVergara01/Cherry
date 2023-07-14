import React, { useEffect, useState } from "react";
import { getAllUsers, addConnection } from "../api/FirestoreAPI";
import ConnectedUsers from "./common/ConnectedUsers";
import "../Sass/ConnectionsComponent.scss";

export default function ConnectionsComponent({ currentUser }) {
  const [users, setUsers] = useState([]);
  const getCurrentUser = (id) => {
    addConnection(currentUser.id, id);
  };
  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  return users.length > 1 ? (
    <div className="connections-main">
      {users.map((user) =>
        user.id === currentUser.id ? (
          <React.Fragment key={user.id}></React.Fragment>
        ) : (
          <ConnectedUsers
            key={user.id} // Agrega la prop 'key' con un valor único
            currentUser={currentUser}
            user={user}
            getCurrentUser={getCurrentUser}
          />
        )
      )}
    </div>
  ) : (
    <div className="connections-main">No Connections to Add!</div>
  );
}