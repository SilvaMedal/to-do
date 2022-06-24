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

  const item4: Item = {
    title: "Fourth thing.",
    completed: false,
  };

  const item5: Item = {
    title: "Fifth thing.",
    completed: true,
  };

  const item6: Item = {
    title: "This Sixth thing.",
    completed: false,
  };

  return (
    <div className="">
      <div className="flex justify-between py-2 px-4">
        <span className="underline">My To-Do List</span>
        <span className="underline">Completed Items</span>
      </div>
      <Todos items={[item1, item2, item3, item4, item5, item6]} />
    </div>
  );
}

export default App;
