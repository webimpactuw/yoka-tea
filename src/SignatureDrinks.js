import React from "react";
import creamStrawberry from "./pictures/Cream Strawberry.png";
import blackSesame from "./pictures/Black Sesame.png";
import ubeHaloHalo from "./pictures/Ube Halo Halo.png";
import matchaMatcha from "./pictures/Matcha Matcha.png";
import yuzuAde from "./pictures/Yuzu Ade.png";
import './SignatureDrinks.css'

const drinks = [
  {
    name: "Cream Strawberry",
    image: creamStrawberry,
    description: "Refreshing strawberry ade with a sweet, creamy top.",
  },
  {
    name: "Black Sesame",
    image: blackSesame,
    description: "Milk based with a rich and nutty black sesame gradient.",
  },
  {
    name: "Ube Halo Halo",
    image: ubeHaloHalo,
    description:
      "Our take on a special filipino dessert: halo halo: lychee jelly, red bean, ube ice cream, and house made flan—layered with our signature ube smoothie.",
  },
  {
    name: "Matcha Matcha",
    image: matchaMatcha,
    description:
      "A swirl of our matcha smoothie, made with our subtly light matcha sourced from japan.",
  },
  {
    name: "Yuzu Ade",
    image: yuzuAde,
    description:
      "A refreshing citrus ade with lime, yuzu, and sparkling water.",
  },
];

const SignatureDrinks = () => {
  return (
    <div className="signature-drinks">
      <h1>SIGNATURE DRINKS</h1>
      <div className="drink-list">
        {drinks.map((drink, index) => (
          <div className="drink-item" key={index}>
            <p>{drink.name}</p>
            <img src={drink.image} alt={drink.name} className="drink-image" />
            <p>{drink.description}</p>
          </div>
        ))}
      </div>
      <a href="/menu"><button className="view-menu-button">View Full Menu</button></a>
    </div>
  );
};

export default SignatureDrinks;

