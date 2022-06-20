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
    <div>
      {item.title} -- Complete: {item.completed ? "True" : "False"}
    </div>
  );
}
