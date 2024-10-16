import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header bg-dark text-white p-4">
      <h1 className="text-left">SWAPI</h1>
      <div className="d-flex justify-content-satart align-items-center mt-3">
        <span className="url-prefix">https://swapi.dev/api/</span>
        <input
          type="text"
          className="form-control mx-2 input-url"
          placeholder="people/1"
        />
        <button className="btn btn-primary">Go</button>
      </div>
    </header>
  );
};
