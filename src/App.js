import React from 'react';
import { react } from 'react-dom';

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important!" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "tiger1",
      animal: "Dog1",
      breed: "tails1",
    }),
    React.createElement(Pet, {
      name: "tiger2",
      animal: "Dog2",
      breed: "tails2",
    }),
    React.createElement(Pet, {
      name: "tiger3",
      animal: "Dog3",
      breed: "tails3",
    }),
  ]);
};
react.render(React.createElement(App), document.getElementById("root"));
