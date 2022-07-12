import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { CompletedItem } from "./CompletedItem";
import { Item } from "./TodoItem";
import { Todos } from "./Todos";

const item1: Item = {
  id: 1,
  title: "First thing.",
  completed: true,
};

const item2: Item = {
  id: 2,
  title: "Second thing.",
  completed: false,
};

const item3: Item = {
  id: 3,
  title: "Third thing.",
  completed: true,
};

const item4: Item = {
  id: 4,
  title: "Fourth thing.",
  completed: false,
};

const item5: Item = {
  id: 5,
  title: "Fifth thing.",
  completed: true,
};

const item6: Item = {
  id: 6,
  title: "This Sixth thing.",
  completed: true,
};

const initItems = [item1, item2, item3, item4, item5, item6];

function App() {
  const [items, setItems] = useState(initItems);

  const [isAdding, setIsAdding] = useState();

  const setCompleted = (id: number, completed: boolean) => {
    const newItems = [...items];
    const item = newItems.find((item) => item.id == id);
    if (item) {
      item.completed = completed;
    }
    setItems(newItems);
  };

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
        <Todos items={incompleteItems} setCompleted={setCompleted} />
        <div className="flex-col w-1/3">
          {completedItems.map((item) => (
            <CompletedItem
              key={item.id}
              item={item}
              undo={() => setCompleted(item.id, false)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
