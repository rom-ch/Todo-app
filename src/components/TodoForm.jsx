import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

export function TodoForm() {
  const [name, setName] = useState("");
  const { addTodo } = useTodos();

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "") return;

    addTodo(name);
    setName("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-todo-bg mx-auto mt-8 mb-4 max-w-lg rounded-md"
    >
      <div className="relative flex items-center">
        <label htmlFor="create-todo" className="sr-only">
          Create a new todo
        </label>
        <span className="border-options absolute left-4 size-5.5 rounded-full border"></span>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-form-placeholder focus:ring-gradient-2 w-full rounded-md py-4 pr-4 pl-14 placeholder:text-sm focus:ring-2 focus:outline-none sm:text-base sm:placeholder:text-base"
        />
      </div>
    </form>
  );
}
