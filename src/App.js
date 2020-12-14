import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement("div", { id: "something-important!" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "twinkle",
      animal: "tiger",
      breed: "indian",
    }),
    React.createElement(Pet, {
      name: "maddy",
      animal: "cat",
      breed: "african",
    }),
    React.createElement(Pet, {
      name: "slobby",
      animal: "crocodile",
      breed: "reptile",
    }),
  ]);
};
render(React.createElement(App), document.getElementById("root"));
