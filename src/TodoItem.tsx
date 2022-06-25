export type Item = {
  title: string;
  // startDate: Date;
  // endDate?: Date;
  notes?: string;
  completed: boolean;
};

export type TodoItemProps = {
  item: Item;
};

export function TodoItem({ item }: TodoItemProps) {
  return (
    <div
      className="flex justify-center bg-lime-600 
      text-white text-lg font-semibold rounded-lg m-1 
        px-2 py-1 border-2 border-slate-700"
    >
      {item.title}
    </div>
  );
}
