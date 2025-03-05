import { useCallback, useEffect, useState } from "react";
import { FilterOptions } from "./components/FilterOptions";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";
import { useTheme } from "./hooks/useTheme";
import { useTodos } from "./hooks/useTodos";

function App() {
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const { theme } = useTheme();
  const { todos, clearCompletedTodos } = useTodos();

  const filterTodos = useCallback(
    (filter) => {
      const filteredTodos =
        filter === "active"
          ? todos.filter((todo) => !todo.completed)
          : filter === "completed"
            ? todos.filter((todo) => todo.completed)
            : todos;
      return filteredTodos;
    },
    [todos],
  );

  useEffect(() => {
    setFilteredTodos(filterTodos(filter));
  }, [filter, filterTodos]);

  return (
    <div
      className={`${theme === "dark" ? "bg-mobile-dark md:bg-desktop-dark" : "bg-mobile-light md:bg-desktop-light"} absolute h-[200px] w-full bg-cover bg-no-repeat px-6 pt-10 md:h-[300px]`}
    >
      <Header />
      <TodoForm />
      <ul className="bg-todo divide-options mx-auto w-full max-w-lg divide-y-1 overflow-hidden rounded-md shadow-xl">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}

        <div className="bg-todo-bg text-clear flex items-center justify-between gap-4 p-4 text-sm sm:text-base">
          <p>{todos.length} items left</p>
          <div className="hidden sm:block">
            <FilterOptions setFilter={setFilter} />
          </div>
          <button
            onClick={clearCompletedTodos}
            className="hover:text-inactive-hover focus:ring-gradient-2 cursor-pointer rounded-md focus:ring-2 focus:outline-none"
          >
            Clear Completed
          </button>
        </div>
      </ul>
      <div className="sm:hidden">
        <FilterOptions setFilter={setFilter} />
      </div>
    </div>
  );
}

export default App;
