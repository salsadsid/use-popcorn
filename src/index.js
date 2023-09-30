import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} color="red" size={36}></StarRating>
    <StarRating
      maxRating={5}
      size={36}
      color
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    ></StarRating>
    <Test />
  </React.StrictMode>
);
