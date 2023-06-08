import React from "react";
import "../Styles.css";
import { FaFilter } from "react-icons/fa";

function Boutique() {
  const cardsData = [
    { id: 1, title: "Card 1", description: "Description 1" },
    { id: 2, title: "Card 2", description: "Description 2" },
    { id: 3, title: "Card 3", description: "Description 3" },
    { id: 4, title: "Card 4", description: "Description 4" },
    { id: 5, title: "Card 5", description: "Description 5" },
    { id: 6, title: "Card 6", description: "Description 6" },
    { id: 7, title: "Card 7", description: "Description 7" },
    { id: 8, title: "Card 8", description: "Description 8" },
    { id: 9, title: "Card 9", description: "Description 9" },
    { id: 10, title: "Card 10", description: "Description 10" },
    { id: 11, title: "Card 11", description: "Description 11" },
    { id: 12, title: "Card 12", description: "Description 12" },
  ];

  return (
    <div>
      <h2>Boutique</h2>
      <div className="container_Boutique">
        <div className="filter-column">
          <div className="card_Boutique">
            <h3>
            <FaFilter className="filter-icon" />Filtres
            </h3>

            {/* Ajoutez ici le contenu du menu de filtres */}
          </div>
        </div>
        <div className="grid-column_Boutique">
          <div className="grid_Boutique">
            {cardsData.map((card) => (
              <div className="card_Boutique" key={card.id}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boutique;
