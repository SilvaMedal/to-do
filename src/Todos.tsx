import { Item, TodoItem } from "./TodoItem";
import { CompletedItem } from "./CompletedItem";

export type TodosProps = {
  items: Item[];
};

export function Todos({ items }: TodosProps) {
  return (
    <div className="flex-col w-3/5">
      {items.map((item) => (
        <TodoItem item={item} />
      ))}
      <div className="flex justify-center">
        <button className="px-1 rounded-lg hover:bg-lime-300">
          +Add Item+
        </button>
      </div>
    </div>
  );
}
