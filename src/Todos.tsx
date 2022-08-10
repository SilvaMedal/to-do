import { ChangeEvent, useState } from "react";
import { Item, ItemMutableProps, TodoItem } from "./TodoItem";
import { PlusIcon } from "@heroicons/react/outline";

export type TodosProps = {
  items: Item[];
  addItem: (item: Item) => void;
  updateItem: (item: Item, updates: ItemMutableProps) => void;
};

/*
1. How to prevent both edit and add from being open simultaneously
  (could be done with a "global editing" state, want to render a "disabled" style to the un-editing buttons)
  (tailwind class "pointer-events-none")
2. Make the "title" required (ie: no empty strings)
3. Add complete-by dates? Sorting methods (based on "priority")
4. Cover letter
5. Add animation to tooltips
*/

export function Todos({ items, addItem, updateItem }: TodosProps) {
  const [isAdding, setIsAdding] = useState(false);

  const [newItemTitle, setItemTitle] = useState("");

  const handleAddItem = () => {
    const item: Item = {
      id: Date.now(),
      title: newItemTitle,
      startedOn: new Date(Date.now()).toDateString(),
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
    <div className="w-3/5">
      {items.map((item) => (
        <TodoItem key={item.id} item={item} updateItem={updateItem} />
      ))}
      <div className="flex justify-center">
        {isAdding ? (
          <form
            onSubmit={handleAddItem}
            className="flex flex-col space-y-2 rounded border-2 border-black bg-lime-400"
          >
            <input
              className="m-1 p-1"
              placeholder="Type your task..."
              type="text"
              value={newItemTitle}
              onChange={handleTitleChange}
              required
              autoFocus
            />
            <div className="flex justify-center space-x-2">
              <button
                className="bg-slate-200 hover:bg-red-200 hover:font-bold rounded-lg m-1 px-2 py-1 border-1 border-black"
                type="reset"
                onClick={resetForm}
              >
                Cancel
              </button>
              <button
                className="bg-slate-200 hover:bg-lime-200 hover:font-bold rounded-lg m-1 px-2 py-1 border-1 border-black"
                type="submit"
              >
                Add Item
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={() => setIsAdding(true)}
            className="flex px-1 rounded-lg font-bold text-lg hover:bg-lime-600 hover:text-white"
          >
            <div className="flex">
              <PlusIcon className="h-6 w-6" />
              Add Item
              <PlusIcon className="h-6 w-6" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
