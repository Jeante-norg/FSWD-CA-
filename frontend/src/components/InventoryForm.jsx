// src/components/InventoryForm.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function InventoryForm() {
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/add`, formData);
      setError("");
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>{error}</p>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <br />
        <br />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={formData.description}
        />
        <br />
        <br />
        <label htmlFor="price">Price: </label>
        <input
          type="text"
          name="price"
          onChange={handleChange}
          value={formData.price}
        />
        <br />
        <br />
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="text"
          name="quantity"
          onChange={handleChange}
          value={formData.quantity}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default InventoryForm;
