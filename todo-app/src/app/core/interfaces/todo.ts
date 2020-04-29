export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  edit: boolean;
  date?: any;
}