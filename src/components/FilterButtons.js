//src/components/FilterButtons.js (The Controls: Changes the filter state in App)

function FilterButtons({ filter, onFilterChange }) {
  return (
    <div className="filter-buttons">
      
      {/* 
        When clicked, calls onFilterChange and pass the string wanted to set.
        It also applies an 'active' class dynamically if it matches the current filter.
      */}
      
      <button 
        onClick={() => onFilterChange('all')}
        className={filter === 'all' ? 'active' : ''}
      >
        All
      </button>

      <button 
        onClick={() => onFilterChange('completed')}
        className={filter === 'completed' ? 'active' : ''}
      >
        Completed
      </button>

      <button 
        onClick={() => onFilterChange('incomplete')}
        className={filter === 'incomplete' ? 'active' : ''}
      >
        Incomplete
      </button>
      
    </div>
  );
}

export default FilterButtons;

//App.js needs a new piece of state: filter (which starts as "all").

//App.js will filter the tasks array before passing it to <TodoList />.

//Need a new component, FilterButtons.js, to change the filter state.