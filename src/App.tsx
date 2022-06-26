import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { CompletedItem } from "./CompletedItem";
import { Item } from "./TodoItem";
import { Todos } from "./Todos";

function App() {
  // const [count, addItem] = useState(0);

  // const addItem = () => {

  // }

  const item1: Item = {
    title: "First thing.",
    completed: true,
  };

  const item2: Item = {
    title: "Second thing.",
    completed: false,
  };

  const item3: Item = {
    title: "Third thing.",
    completed: true,
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
    completed: true,
  };

  const items = [item1, item2, item3, item4, item5, item6];

  const incompleteItems = items.filter((item) => !item.completed);

  const completedItems = items.filter((item) => item.completed);

  return (
    <div className="h-screen bg-amber-100">
      <div className="flex justify-between">
        <div className="flex justify-center w-3/5">
          <span className="underline font-mono text-3xl">My To-Do List</span>
        </div>
        <div className="flex justify-center w-1/3">
          <span className="underline font-mono text-2xl">Completed Items</span>
        </div>
      </div>
      <div className="flex grow justify-between">
        <Todos items={incompleteItems} />
        <div className="flex-col w-1/3">
          {completedItems.map((item) => (
            <CompletedItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
