import { useState } from "react";
import "./App.css";
import MyButton from "./components/MyButton";
import ProfileCard from "./components/ProfileCard";
import profiles from "./data.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 style={{ color: "white" }}>{count}</h2>
      <button
        onClick={() => {
          //alert("You clicked + button");
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          //alert("You clicked - button");
          setCount(count - 1);
        }}
      >
        -
      </button>

      <MyButton title="BUY" color="Red" />
      <MyButton title="SELL" color="Blue" />

      {profiles.map((profile) => (
        <ProfileCard
          image={profile.image}
          title={profile.title}
          name={profile.name}
          description={profile.description}
        />
      ))}
    </>
  );
}

export default App;
