import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

function App() {
  const [dark, setDark] = useState(false)
  const [itemsElem] = useState(items)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  function handleDarkMode() {
    setDark(dark => !dark)
  }
  
  const appClass = dark ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{dark ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={itemsElem} />
    </div>
  );
}

export default App;
