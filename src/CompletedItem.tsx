import { Item } from "./TodoItem";

export type CompletedItemProps = {
  item: Item;
};

export function CompletedItem({ item }: CompletedItemProps) {
  return (
    <div
      className="flex w-1/3 justify-center bg-teal-500 
        text-white text-lg font-semibold rounded-lg m-1 
          px-2 py-1 border-2 border-slate-700"
    >
      {item.title}
    </div>
  );
}
