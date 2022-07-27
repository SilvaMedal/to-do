import { Item } from "./TodoItem";

export type CompletedItemProps = {
  item: Item;
  undo: () => void;
  remove: () => void;
};

export function CompletedItem({ item, undo, remove }: CompletedItemProps) {
  return (
    <div
      className="flex flex-col justify-between bg-teal-500 
    rounded-lg m-1 px-2 py-1 border-2 border-slate-700"
    >
      <div
        className="
        text-white text-lg font-semibold"
      >
        {item.title}
      </div>
      <div className="flex justify-between">
        <button className="pl-2" onClick={undo}>
          undo?
        </button>
        <button className="pr-2" onClick={remove}>
          remove?
        </button>
      </div>
    </div>
  );
}
