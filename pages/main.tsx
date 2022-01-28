import { Header, TableContainer } from "components";
import { ITodo } from "components/Containers/todo-list/TodoList.model";
import { useFetch } from "global/hooks";

const initialTodos: ITodo[] = [
  {
    id: 1,
    task: "task 1",
    isCompleted: false,
  },
  {
    id: 2,
    task: "task 2",
    isCompleted: false,
  },
  {
    id: 3,
    task: "task 3",
    isCompleted: true,
  },
  {
    id: 4,
    task: "task 4",
    isCompleted: false,
  },
  {
    id: 5,
    task: "task 5",
    isCompleted: false,
  },
];

const Main = () => {
  const { data, isPending } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/10"
  );

  return (
    <>
      <Header />
      <div style={{ padding: "30px" }}>
        <h1>Main Page</h1>
        <TableContainer></TableContainer>
      </div>
    </>
  );
};

export default Main;
