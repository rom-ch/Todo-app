import { useTodos } from "../hooks/useTodos";
import checkIcon from "../images/icon-check.svg";

export function TodoItem({ id, name, completed }) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <li className="bg-todo-bg flex items-center gap-4 p-4">
      <label
        htmlFor={id}
        className="from-gradient-1 to-gradient-2 relative flex size-5.5 gap-4 rounded-full has-active:bg-linear-135 has-active:p-px"
      >
        <input
          id={id}
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          className="peer bg-todo-bg border-options from-gradient-1 to-gradient-2 focus:ring-gradient-2 size-6 h-full w-full cursor-pointer appearance-none rounded-full border checked:border-none checked:bg-linear-135 focus:ring-2 focus:outline-none"
        />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer opacity-0 peer-checked:opacity-100">
          <img src={checkIcon} alt="check" />
        </span>
      </label>
      <label
        htmlFor={id}
        className={`flex-1 cursor-pointer text-sm font-semibold sm:text-base ${completed ? "text-inactive line-through" : "text-text-todo"}`}
      >
        {name}
      </label>
      <button
        onClick={() => deleteTodo(id)}
        className="focus:ring-gradient-2 ml-auto size-4 cursor-pointer rounded-md focus:ring-2 focus:outline-none"
      >
        <svg
          className="group"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
        >
          <path
            className="group-hover:fill-inactive-hover"
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </li>
  );
}
