function TodoItem({ task, onToggle, onDelete }) {
  return (
    // We use a template literal to add the class "completed" ONLY if task.completed is true.
    // This will allow us to add strikethrough CSS later.
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      
      <span>{task.text}</span>
      
      <div className="task-buttons">
        {/* When clicked, it calls onToggle and passes the task's ID up the chain */}
        <button onClick={() => onToggle(task.id)}>
          {/* Ternary operator: If completed, show "Undo", otherwise show "Complete" */}
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        
        {/* When clicked, it calls onDelete and passes the task's ID up the chain */}
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