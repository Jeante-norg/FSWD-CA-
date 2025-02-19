// InventoryItem component
import React from "react";

const InventoryItem = ({ name, description, price, quantity }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h4>Description: {description}</h4>
      <h4>Price: {price}</h4>
      <h4>Quantity: {quantity}</h4>
    </div>
  );
};

export default InventoryItem;
