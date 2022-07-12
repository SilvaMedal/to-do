export type Item = {
  id: number;
  title: string;
  // startDate: Date;
  // endDate?: Date;
  notes?: string;
  completed: boolean;
};

export type TodoItemProps = {
  item: Item;
  complete: () => void;
};

export function TodoItem({ item, complete }: TodoItemProps) {
  return (
    <div
      className="flex justify-between bg-lime-600 rounded-lg m-1 
      px-2 py-1 border-2 border-slate-700"
    >
      <div
        className="
    text-white text-lg font-semibold"
      >
        {item.title}
      </div>
      <button className="" onClick={complete}>
        completed?
      </button>
    </div>
  );
}
