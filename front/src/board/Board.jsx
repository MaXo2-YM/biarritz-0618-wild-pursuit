import React, { Component } from "react";

import NormalBox from "./../normalBox/NormalBox.jsx";
import CheeseBox from "./../cheeseBox/CheeseBox.jsx";
import ReplayBox from "./../replayBox/ReplayBox.jsx";
import CenterBox from "./../centerBox/CenterBox.jsx";

export default class Board extends Component {
  render() {
    return (
      <div>
        <NormalBox
          objet={{
            id: 27,
            coord: [78, 67],
            categorie: {
              nom: "Géographie",
              couleur: { nom: "Rouge", code: "#FF0000" }
            }
          }}
        />
        <CheeseBox
          cheeseObjet={{
            id: 34,
            coord: [11, 30],
            categorie: {
              nom: "Histoire",
              couleur: { nom: "Noir", code: "#FFFFFF" }
            }
          }}
        />
        <ReplayBox
          replayObjet={{
            id: 22,
            coord: [14, 71],
            categorie: {
              nom: "Loisir",
              couleur: { nom: "Rose", code: "#FFFFFF" }
            }
          }}
        />
        <CenterBox
          centerObjet={{
            id: 82,
            coord: [0, 0],
            categorie: {
              nom: "Loisir",
              couleur: { nom: "Bleu", code: "#FFFFFF" }
            }
          }}
        />
      </div>
    );
  }
}
