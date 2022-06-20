import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Item, TodoItem } from "./TodoItem";
import { Todos } from "./Todos";

function App() {
  const [count, addItem] = useState(0);

  const item1: Item = {
    title: "First thing.",
    completed: false,
  };

  const item2: Item = {
    title: "Second thing.",
    completed: true,
  };

  const item3: Item = {
    title: "Third thing.",
    completed: false,
  };

  return (
    <div>
      <p>Hello World!</p>

      <Todos items={[item1, item2, item3]} />
    </div>
  );
}

export default App;
