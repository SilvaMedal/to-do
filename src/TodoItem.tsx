import { ChangeEvent, useState } from "react";
import {
  CheckCircleIcon,
  PencilAltIcon,
  CheckIcon,
  XIcon,
} from "@heroicons/react/outline";

export type Item = {
  id: number;
  title: string;
  completedAt?: number;
  startedOn: string;
};

export type ItemMutableProps = Partial<Omit<Item, "id">>;

export type TodoItemProps = {
  item: Item;
  updateItem: (item: Item, updates: ItemMutableProps) => void;
};

//

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
        <form onSubmit={handleEdit} className="flex justify-between">
          <input
            className="px-1 grow rounded-lg bg-lime-200 font-semibold"
            type="text"
            value={editedTitle}
            onChange={handleEditChange}
            autoFocus
          />
          <div className="mt-1 ml-1 space-x-2">
            <button type="reset" onClick={resetEdit}>
              <XIcon className="h-7 w-7 hover:stroke-red-500 hover:stroke-bold" />
            </button>
            <button type="submit">
              <CheckIcon className="h-7 w-7 hover:stroke-green-500" />
            </button>
          </div>
        </form>
      ) : (
        <div className="flex justify-between">
          <div className="space-x-2">
            <span className="text-white text-xl font-semibold">
              {item.title}
            </span>
            <button className="" onClick={() => setIsEditing(true)}>
              <div className="tooltip">
                <PencilAltIcon className="h-4 w-4" />
                <span className="display-right text-sm">Edit Item</span>
              </div>
            </button>
          </div>
          <button
            className=""
            onClick={() => updateItem(item, { completedAt: Date.now() })}
          >
            <div className="tooltip">
              <CheckCircleIcon className="h-8 w-8 stroke-black fill-teal-500 hover:stroke-teal-500 hover:fill-black" />
              <span className="display-left text-sm">Task Complete?</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
