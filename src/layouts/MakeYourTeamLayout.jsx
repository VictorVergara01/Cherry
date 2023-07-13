import React, { useMemo, useState } from "react";
import MakeYourTeam from "../Pages/MakeYourTeam";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/Topbar";

export default function MakeYourTeamLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Topbar currentUser={currentUser} />
      <MakeYourTeam currentUser={currentUser} />
    </div>
  );
}