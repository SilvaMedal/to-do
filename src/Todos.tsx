import { Item, TodoItem } from "./TodoItem";
import { CompletedItem } from "./CompletedItem";

export type TodosProps = {
  items: Item[];
};

export function Todos({ items }: TodosProps) {
  return (
    <div /*className="flex"*/>
      <div className="flex-col">
        {items.map((item) => {
          if (item.completed) {
            return <TodoItem item={item} />;
          }
        })}
      </div>
      <div className="flex-col content-end">
        {items.map((item) => {
          if (!item.completed) {
            return <CompletedItem item={item} />;
          }
        })}
      </div>
    </div>
  );
}
