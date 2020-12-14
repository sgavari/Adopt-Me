import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  // return React.createElement("div", { id: "something-important!" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "twinkle",
  //     animal: "tiger",
  //     breed: "indian",
  //   }),
  //   React.createElement(Pet, {
  //     name: "maddy",
  //     animal: "cat",
  //     breed: "african",
  //   }),
  //   React.createElement(Pet, {
  //     name: "slobby",
  //     animal: "crocodile",
  //     breed: "reptile",
  //   }),
  // ]);

return(
<div>
  <h1 id= "something-important!">Adopt Me!</h1>
  <Pet name = "Luna" animal="Dog" breed="Havanse"></Pet>
  <Pet name = "Pepper" animal="Bird" breed="Cockatiel"></Pet>
  <Pet name = "Doink" animal="Cat" breed="Mixed"></Pet>
</div>
);

};
render(<App/>, document.getElementById("root"));
