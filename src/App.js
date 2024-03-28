import Foodlist from "./Components/Foodlist";
import Foodlinput from "./Components/Foodinput";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  let [foodlist, setFoodlist] = useState([]);

  let [foodtext, setfoodtext] = useState();
 
  const handalClick = (e) => {
    setfoodtext(e.target.value);
  };

  // setFoodlist(foodtext);
  const onkeyDoun = (e) => {
    if (e.key === "Enter") {
      let newFoodlist = e.target.value;
      let newItem = [...foodlist, newFoodlist];
      setFoodlist(newItem);
     
    }
  };

  return (
    <center className="container container-sm container-md container-lg container-xl">
      <center>
        <h1>Helty Food App</h1>
      </center>

      <p>You added new Item {foodtext}</p>
      <Foodlinput onkeyDoun={onkeyDoun} />
      <Foodlist foodlist={foodlist} />
    </center>
  );
}

export default App;
