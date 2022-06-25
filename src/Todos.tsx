import { Item, TodoItem } from "./TodoItem";
import { CompletedItem } from "./CompletedItem";

export type TodosProps = {
  items: Item[];
};

export function Todos({ items }: TodosProps) {
  return (
    <div className="flex grow justify-between">
      <div className="flex-col w-3/5">
        {items.map((item) => {
          if (!item.completed) {
            return <TodoItem item={item} />;
          }
        })}
      </div>
      <div className="flex-col w-1/3">
        {items.map((item) => {
          if (item.completed) {
            return <CompletedItem item={item} />;
          }
        })}
      </div>
    </div>
  );
}
