import React from "react";
import "../Sass/HomeComponent.scss";
import MakeTeam from "./common/MakeTeam";

export default function MakeYourTeam({ currentUser }) {
  return (
    <div className="make-component">
      <MakeTeam currentUser={currentUser} />
    </div>
  );
}