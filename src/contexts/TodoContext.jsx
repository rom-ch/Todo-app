import { createContext, useEffect, useReducer } from "react";

const LOCAL_STORAGE_TODOS_KEY = "todos";

const ACTIONS = {
  ADD: "ADD",
  DELETE: "DELETE",
  CLEAR: "CLEAR",
  TOGGLE: "TOGGLE",
};

function reducer(todos, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
      return [
        ...todos,
        { name: payload.name, completed: false, id: crypto.randomUUID() },
      ];
    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, completed: payload.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== payload.id);
    case ACTIONS.CLEAR:
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
}

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    const localValue = localStorage.getItem(LOCAL_STORAGE_TODOS_KEY);
    return localValue != null ? JSON.parse(localValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(name) {
    dispatch({ type: ACTIONS.ADD, payload: { name } });
  }

  function toggleTodo(todoId, completed) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id: todoId, completed } });
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE, payload: { id: todoId } });
  }

  function clearCompletedTodos() {
    dispatch({ type: ACTIONS.CLEAR });
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        clearCompletedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
