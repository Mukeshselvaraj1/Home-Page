import React from "react";
import { Routes, Route } from "react-router-dom";
// import Main from "./Main";

//
//resume
import Navebar from "./Resume/Navebar";
import Featurette from "./Resume/Featurette";

//r*
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navebar />}>
        <Route index element={<Featurette />} />
      </Route>
    </Routes>
  );
}

export default App;
