import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Item({ item, handalClick, handaldelet }) {
  return (
    <li className="list-group">
      <p>
        {" "}
        {item}
        <button onClick={handalClick} className=" btn btn-info">
          Bye
        </button>
        <button className="btn btn-danger" onClick={handaldelet}>
          delet
        </button>
      </p>{" "}
    </li>
  );
}

export default Item;
