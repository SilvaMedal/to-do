import { useState } from "react";
// import logo from "./logo.svg";
import { MenuAlt1Icon } from "@heroicons/react/outline";
import "./App.css";
import { CompletedItem } from "./CompletedItem";
import { Item, ItemMutableProps } from "./TodoItem";
import { Todos } from "./Todos";
//
function App() {
  const [items, setItems] = useState<Item[]>(
    JSON.parse(localStorage.getItem("our-items") || "[]")
  );

  const updateStorage = (ourItems: Item[]) => {
    localStorage.setItem("our-items", JSON.stringify(ourItems));
    setItems(ourItems);
  };

  const addItem = (item: Item) => {
    const updatedItems = [...items, item];
    updateStorage(updatedItems);
  };

  const updateItem = (item: Item, updates: ItemMutableProps) => {
    const newItems = [...items];
    const updatedItem: Item = { ...item, ...updates };
    const itemIndex = newItems.indexOf(item);
    newItems.splice(itemIndex, 1, updatedItem);
    updateStorage(newItems);
  };

  const removeCompleted = (id: number) => {
    const newItems = [...items];
    const itemIndex = newItems.findIndex((item) => item.id == id);
    if (
      itemIndex != -1 &&
      window.confirm(
        `Are you sure you want to delete "${newItems[itemIndex].title}" from your list?`
      )
    ) {
      newItems.splice(itemIndex, 1);
      updateStorage(newItems);
    }
  };

  const incompleteItems = items.filter((item) => !item.completedAt);

  const completedItems = items
    .filter((item) => item.completedAt)
    //.sort((a, b) => b.completedAt! - a.completedAt!); \/-- same as below.
    .sort((a, b) => (b.completedAt ?? 0) - (a.completedAt ?? 0));

  const resetCompletedItems = () => {
    if (
      completedItems.length > 0 &&
      window.confirm("You are about to PERMANENTLY DELETE 'Completed Items'!")
    ) {
      updateStorage(incompleteItems);
    }
  };

  return (
    <div className="h-screen bg-amber-100">
      <div className="flex justify-between">
        <div className="flex justify-center w-3/5 space-x-2">
          <span className="underline font-mono text-3xl">My To-Do List</span>
          <button>
            <div className="tooltip">
              <MenuAlt1Icon className="h-5 w-5 hover:stroke-white hover:bg-black" />
              <span className="display-bottom text-sm">
                Sort Items /coming soon/
              </span>
            </div>
          </button>
        </div>
        <div className="flex justify-center w-1/3 space-x-2">
          <span className="underline font-mono text-2xl">Completed Items</span>
          <div className="tooltip">
            <button onClick={resetCompletedItems}>Clear List?</button>
            <span className="display-bottom display-left">
              Clear "Completed Items"
            </span>
          </div>
        </div>
      </div>
      <div className="flex grow justify-between">
        <Todos
          items={incompleteItems}
          addItem={addItem}
          updateItem={updateItem}
        />
        <div className="w-1/3">
          {completedItems.map((item) => (
            <CompletedItem
              key={item.id}
              item={item}
              undo={() => updateItem(item, { completedAt: undefined })}
              remove={() => removeCompleted(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
