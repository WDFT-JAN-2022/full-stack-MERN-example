import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([]);

  const getItems = () => {
    axios
      .get("http://localhost:5005/api/item/view-all")
      .then((results) => {
        setItems(results.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className="App">
      <button onClick={getItems}>Get Items</button>
      {items.map((item) => {
        return (
          <div key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
