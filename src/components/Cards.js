import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const Cards = ({ tab }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="card-list">
      {data.map((item,index) => (
        <Card
          key={index}
          title={item.title}
          timeframes={item.timeframes}
          tab={tab}
        />
      ))}
    </div>
  );
};

export default Cards;
