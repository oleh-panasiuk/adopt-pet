import React from "react";
import reactDom from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "DorianSas",
      animal: "Cat",
      color: "Red",
    }),
    React.createElement(Pet, { name: "Dorian", animal: "Cat", color: "Red" }),
    React.createElement(Pet, { name: "Dorian", animal: "Cat", color: "Red" }),
  ]);
};

reactDom.render(React.createElement(App), document.getElementById("root"));
