// src/components/InventoryList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import InventoryItem from "./InventoryItem";

function InventoryList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http:localhost:5000`);
        setData(res.data.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Inventory List: </h1>
      {data.map((item) => {
        return <InventoryItem />;
      })}
      <InventoryItem />
    </>
  );
}

export default InventoryList;
