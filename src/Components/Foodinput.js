import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Foodinput({ onkeyDoun }) {
  return (
    <div>
      <input type="text" placeholder="Enter food item" onKeyDown={onkeyDoun} className="input-group-text"/>
    </div>
  );
}

export default Foodinput;
