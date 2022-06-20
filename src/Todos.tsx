import { Item, TodoItem } from "./TodoItem";

export type TodosProps = {
  items: Item[];
};

export function Todos({ items }: TodosProps) {
  return (
    <div>
      {items.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );
}
