//src/components/TodoItem.js (The Row: Displays the task and has the buttons)

function TodoItem({ task, onToggle, onDelete }) {
  return (
    // Template literal: dynamically adds the "completed" CSS class if task.completed is true
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      
      <span>{task.text}</span>
      
      <div className="task-buttons">
        
        {/* Calls the toggle function and passes this specific task's ID up the chain */}
        <button onClick={() => onToggle(task.id)}>
          {/* Ternary operator: changes the text based on if it's completed */}
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        
        {/* Calls the delete function and passes this specific task's ID up the chain */}
        <button onClick={() => onDelete(task.id)}>
          Delete
        </button>
        
      </div>

    </li>
  );
}

export default TodoItem;
//npm start to run the app. The app will be available at http://localhost:3000
//Ctrl + C to stop the server