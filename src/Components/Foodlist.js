import React from "react";
import Item from "./Item";
import 'bootstrap/dist/css/bootstrap.min.css';
function Foodlist({ foodlist,handalClick}) {
 

  return (
    <ul >
      {foodlist.map((item, index) => (
        <Item key={index} item={item} handalClick={handalClick} />
      ))}
    </ul>
  );
}

export default Foodlist;
