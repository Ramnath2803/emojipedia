import React from "react";

import emojipedia from "../emojipedia";
import Card from "./emoji";

function dataReceive(data) {
  return (
    <Card
      key={data.id}
      id={data.id}
      emoji={data.emoji}
      name={data.name}
      meaning={data.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(dataReceive)}
    </div>
  );
}

export default App;
