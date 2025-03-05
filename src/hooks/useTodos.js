import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export function useTodos() {
  const context = useContext(TodoContext);
  return context;
}
