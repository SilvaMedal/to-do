import { Item } from "./TodoItem";

export type CompletedItemProps = {
  item: Item;
  undo: () => void;
};

export function CompletedItem({ item, undo }: CompletedItemProps) {
  return (
    <div
      className="flex justify-between bg-teal-500 
    rounded-lg m-1 px-2 py-1 border-2 border-slate-700"
    >
      <button className="" onClick={undo}>
        undo?
      </button>
      <div
        className="
        text-white text-lg font-semibold"
      >
        {item.title}
      </div>
    </div>
  );
}
