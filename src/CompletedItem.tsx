import { Item } from "./TodoItem";
import { TrashIcon, ReceiptRefundIcon } from "@heroicons/react/outline";

export type CompletedItemProps = {
  item: Item;
  undo: () => void;
  remove: () => void;
};

export function CompletedItem({ item, undo, remove }: CompletedItemProps) {
  return (
    <div
      className="flex flex-col bg-teal-500 
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
          <div className="tooltip">
            <ReceiptRefundIcon className="h-6 w-6 fill-lime-400 hover:stroke-lime-400 hover:fill-black" />
            <span className="display-right text-sm">Undo Completion?</span>
          </div>
        </button>
        <button className="pr-2" onClick={remove}>
          <div className="tooltip">
            <TrashIcon className="h-6 w-6 fill-slate-500 hover:stroke-red-600 hover:placeholder" />
            <span className="display-left text-sm">Delete Item</span>
          </div>
        </button>
      </div>
    </div>
  );
}
