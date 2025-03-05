export function FilterOptions({ setFilter }) {
  return (
    <fieldset className="bg-todo-bg mx-auto mt-6 flex max-w-lg items-center justify-center gap-6 rounded-md p-4 shadow-xl sm:mt-0 sm:p-0 sm:shadow-none">
      <legend className="sr-only">Filter Options</legend>
      <label className="cursor-pointer">
        <input
          defaultChecked
          type="radio"
          name="filter"
          id="filter-all"
          value="all"
          onChange={(e) => setFilter(e.target.value)}
          className="peer appearance-none focus:outline-none"
        />
        <span className="peer-checked:text-accent-blue text-inactive not-peer-checked:hover:text-inactive-hover font-semibold">
          All
        </span>
      </label>
      <label className="cursor-pointer">
        <input
          type="radio"
          name="filter"
          id="filter-active"
          value="active"
          onChange={(e) => setFilter(e.target.value)}
          className="peer appearance-none"
        />
        <span className="peer-checked:text-accent-blue text-inactive not-peer-checked:hover:text-inactive-hover font-semibold">
          Active
        </span>
      </label>
      <label className="cursor-pointer">
        <input
          type="radio"
          name="filter"
          id="filter-completed"
          value="completed"
          onChange={(e) => setFilter(e.target.value)}
          className="peer appearance-none"
        />
        <span className="peer-checked:text-accent-blue text-inactive not-peer-checked:hover:text-inactive-hover font-semibold">
          Completed
        </span>
      </label>
    </fieldset>
  );
}
