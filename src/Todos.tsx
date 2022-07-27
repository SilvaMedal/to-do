import { ChangeEvent, useState } from "react";
import { Item, TodoItem } from "./TodoItem";

export type TodosProps = {
  items: Item[];
  setCompleted: (id: number, completed: boolean) => void;
  addItem: (item: Item) => void;
};

/*
-Style the input box
-set priorities/sorting method based oldest in list?
-add a way to edit the items already in the list
    -(use "setCompleted" from App as base for "setTitle" in ToDoItem for editing purposes)
*/

export function Todos({ items, setCompleted, addItem }: TodosProps) {
  const [isAdding, setIsAdding] = useState(false);

  const [newItemTitle, setItemTitle] = useState("");

  const handleAddItem = () => {
    const item: Item = {
      id: Date.now(),
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
          <form onSubmit={handleAddItem} className="flex flex-col space-y-2">
            <input
              type="text"
              value={newItemTitle}
              onChange={handleTitleChange}
              autoFocus
            />
            <div className="flex justify-center space-x-2">
              <button type="reset" onClick={resetForm}>
                Cancel
              </button>
              <button type="submit">Add</button>
            </div>
          </form>
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
