import React from "react";

function Card({ name, age }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

export default Card;