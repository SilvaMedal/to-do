import { ChangeEvent, useState } from "react";
import { Item, TodoItem } from "./TodoItem";

export type TodosProps = {
  items: Item[];
  setCompleted: (id: number, completed: boolean) => void;
  addItem: (item: Item) => void;
};

/*
  -Set an "isAdding" state, use ternary to decide if input box appears or if
    "Add Item" button appears. 
  -"Add Item" should set "isAdding" to true.
  -in the input box, will need an "Add" button and "Cancel" button.
  -"Cancel" should immediately set "isAdding" state to false, and render
    using the current state.
*/

export function Todos({ items, setCompleted, addItem }: TodosProps) {
  const [isAdding, setIsAdding] = useState(false);

  const [newItemTitle, setItemTitle] = useState("");

  const handleAddItem = () => {
    const item: Item = {
      id: Math.round(Math.random() * 1000),
      title: newItemTitle,
      completed: false,
    };
    addItem(item);
    resetForm();
  };

  const resetForm = () => {
    setIsAdding(false);
    setItemTitle("");
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setItemTitle(event.target.value);
  };

  return (
    <div className="flex-col w-3/5">
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          complete={() => setCompleted(item.id, true)}
        />
      ))}
      <div className="flex justify-center">
        {isAdding ? (
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              value={newItemTitle}
              onChange={handleTitleChange}
            />
            <div className="flex justify-center space-x-2">
              <button onClick={resetForm}>Cancel</button>
              <button onClick={handleAddItem}>Add</button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsAdding(true)}
            className="px-1 rounded-lg hover:bg-lime-300"
          >
            +Add Item+
          </button>
        )}
      </div>
    </div>
  );
}
