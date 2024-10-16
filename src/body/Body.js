import React from "react";
import "./Body.css";

export const Body = () => {
  const data = [
    {id: 1, name: "Alan", age: 30, city: "London" },
    {id: 2, name: "Leia", age: 25, city: "New York" },
    {id: 3, name: "Luke", age: 28, city: "Berlin" },
  ];
  return (
    <div className="body-section container">
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="card text-white bg-secondary mb-3">
            <div className="card-body">
                <h5 className="card-title text-white">{item.name}</h5>
                <p className="card-text-age">Age: {item.age}</p>
                <p className="card-text">City: {item.city}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
