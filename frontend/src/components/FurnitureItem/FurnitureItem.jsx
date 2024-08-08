import React, { useContext } from "react";
import "./FurnitureItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FurnitureItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="furniture-item">
      <div className="furniture-item-img-container">
        <img
          className="furniture-item-image"
          src={url + "/images/" + image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="furniture-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="furniture-item-info">
        <div className="furniture-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_stars} alt="" />
        </div>
        <p className="furniture-item-desc">{description}</p>
        <p className="furniture-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FurnitureItem;
