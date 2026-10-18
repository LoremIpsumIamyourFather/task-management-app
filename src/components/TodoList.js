import TodoItem from './TodoItem';

// Destructuring the props passed from App.js
function TodoList({ tasks, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {/* Loop through every task in the array */}
      {tasks.map((task) => (
        // For each task, render a TodoItem and pass down the specific task data
        // AND the functions needed to update or delete it
        <TodoItem 
          key={task.id} // React needs this unique key to track the list
          task={task} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
}

export default TodoList;


//npm start- to run the React app. The app will be available at http://localhost:3000. React needs the Node.js environment provided by npm start to translate JSX into regular JavaScript.
//npm start to run the app. The app will be available at http://localhost:3000
//Ctrl + C to stop the server