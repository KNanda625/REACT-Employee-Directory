import React from "react";
import "./style.css";


const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid" id="header">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">
          Directory listing all employees.  Search for a specific person or sort by category.
        </p>
      </div>
    </div>

  );
};

export default Jumbotron;
