import React, { useContext } from "react";
import "./FurnitureDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FurnitureItem from "../FurnitureItem/FurnitureItem";

const FurnitureDisplay = ({ category }) => {
  const { furniture_list } = useContext(StoreContext);

  return (
    <div className="furniture-display" id="furniture-display">
      <h2>Our Products</h2>
      <div className="furniture-display-list">
        {furniture_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FurnitureItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FurnitureDisplay;
