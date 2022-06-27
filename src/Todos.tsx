import { Item, TodoItem } from "./TodoItem";
import { CompletedItem } from "./CompletedItem";

export type TodosProps = {
  items: Item[];
  setCompleted: (id: number, completed: boolean) => void;
};

/*-Set an "isAdding" state, use ternary to decide if input box appears or if
    "Add Item" button appears. 
  -"Add Item" should set "isAdding" to true.
  -in the input box, will need an "Add" button and "Cancel" button.
  -
*/

export function Todos({ items, setCompleted }: TodosProps) {
  return (
    <div className="flex-col w-3/5">
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          complete={() => setCompleted(item.id, true)}
        />
      ))}
      <div className="flex justify-center">
        <button className="px-1 rounded-lg hover:bg-lime-300">
          +Add Item+
        </button>
      </div>
    </div>
  );
}
