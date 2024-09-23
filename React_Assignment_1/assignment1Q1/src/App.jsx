import React from "react";
import Greeting from "./Greeting"; // Ensure the file path and name are correct
import ProfileCard from "./ProfileCard";
import StatusMessage from "./StatusMessage";
import Counter from "./Counter";
import LikeButton from "./LikeButton";
function App() {
  return (
    <div>
      <Greeting name={"Hardik"} /> {/* Consistent capitalization for names */}
      <ProfileCard name={"Hardik"} age={"21"} location={"Udaipur"}/>
      <ProfileCard name={"kanishk"} age={"20"} location={"Udaipur"}/>
      <ProfileCard name={"kartik"} age={"22"} location={"Udaipur"}/>
      <StatusMessage status={"success"}/>
      <Counter />
      <LikeButton />
    </div>
  );
}

export default App;
 