import React, { useState } from "react";
import "../views/Styles.css";
import { FaFilter } from "react-icons/fa";
import collier from "../assets/Images/collier.jpeg";

function Boutique() {
  const [filterOptions, setFilterOptions] = useState({
    collier: false,
    bracelet: false,
    boucle: false,
  });

  const handleFilterChange = (option) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  const cardsData = [
    {
      id: 1,
      title: "Collier machanica Topaze",
      description:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      price: 55, // Added price
    },
    { id: 2, title: "Card 2", description: "Description 2" },
    { id: 3, title: "Card 3", description: "Description 3" },
  ];

  return (
    <div>
      <h2>Boutique</h2>
      <div className="container_Boutique">
        <div className="filter-column">
          <div className="card_Boutique">
            <h3>
              <FaFilter className="filter-icon" />
              Filtres
            </h3>
            <div className="filter-options">
              <label>
                Collier
                <input
                  type="checkbox"
                  checked={filterOptions.collier}
                  onChange={() => handleFilterChange("collier")}
                />
              </label>
              <label>
                Bague
                <input
                  type="checkbox"
                  checked={filterOptions.bague}
                  onChange={() => handleFilterChange("bague")}
                />
              </label>
              <label>
                Boucle d'oreilles
                <input
                  type="checkbox"
                  checked={filterOptions.boucle}
                  onChange={() => handleFilterChange("boucle")}
                />
              </label>
              <label>
                Bracelet
                <input
                  type="checkbox"
                  checked={filterOptions.bracelet}
                  onChange={() => handleFilterChange("bracelet")}
                />
              </label>
              <label>
                Autre
                <input
                  type="checkbox"
                  checked={filterOptions.autre}
                  onChange={() => handleFilterChange("autre")}
                />
              </label>
              <label>
                Hypoallergénique
                <input
                  type="checkbox"
                  checked={filterOptions.Hypoallergénique}
                  onChange={() => handleFilterChange("Hypoallergénique")}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="grid-column_Boutique">
          <div className="grid_Boutique">
            {cardsData.map((card) => (
              <div className="card_Boutique" key={card.id}>
                <h3>{card.title}</h3>
                {card.id === 1 && <img src={collier} alt="Collier" />}{" "}
                {/* Added image */}
                <p>{card.description}</p>
                {card.id === 1 && <p>Prix: {card.price} euros</p>}{" "}
                {/* Added price */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boutique;
