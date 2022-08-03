import { ChangeEvent, useState } from "react";

export type Item = {
  id: number;
  title: string;
  completedAt?: number;
};

export type ItemMutableProps = Partial<Omit<Item, "id">>;

export type TodoItemProps = {
  item: Item;
  updateItem: (item: Item, updates: ItemMutableProps) => void;
};

// add edit button here, and display input box containing current title with option to change or cancel
// 1. add edit button
// 2. when editing want an input box and a cancel and save button (look at how adding works)
// 3. save button should just console.log new title (at first)
// 4. save button should actually work (update the state using new title) pass this component a function to update the state
// 5.

export function TodoItem({ item, updateItem }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);

  const [editedTitle, setEditedTitle] = useState(item.title);

  const handleEdit = () => {
    updateItem(item, { title: editedTitle });
    setIsEditing(false);
  };

  const resetEdit = () => {
    setIsEditing(false);
    setEditedTitle(item.title);
  };

  const handleEditChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(event.target.value);
  };

  // const bgColor = "bg-lime-600";

  return (
    <div
      className="bg-lime-600 rounded-lg m-1 
      px-2 py-1 border-2 border-slate-700"
    >
      {isEditing ? (
        <form onSubmit={handleEdit} className="flex flex-col space-y-2">
          <input
            className="p-1 rounded-lg bg-lime-200 font-semibold"
            type="text"
            value={editedTitle}
            onChange={handleEditChange}
            autoFocus
          />
          <div className="flex justify-center space-x-2">
            <button type="reset" onClick={resetEdit}>
              Cancel
            </button>
            <button type="submit">Confirm</button>
          </div>
        </form>
      ) : (
        <div className="flex justify-between">
          <div className="space-x-2">
            <span className="text-white text-lg font-semibold">
              {item.title}
            </span>
            <button className="" onClick={() => setIsEditing(true)}>
              edit?
            </button>
          </div>
          <button
            className=""
            onClick={() => updateItem(item, { completedAt: Date.now() })}
          >
            completed?
          </button>
        </div>
      )}
    </div>
  );
}
