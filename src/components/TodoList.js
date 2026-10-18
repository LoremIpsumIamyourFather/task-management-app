import TodoItem from './TodoItem';//Import the child component TodoItem//

function TodoList({ tasks }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => ( /* use the .map() array method inside the curly braces. This loops through every task and returns a <TodoItem /> component  */ 
        <TodoItem key={task.id} task={task} /> /* key={task.id}:Critical. React needs this to track which item is which.  task={task}: Pass the single task object down to TodoItem as a prop/>*/ 
      ))}
    </ul>
  );
}

export default TodoList;


//npm start- to run the React app. The app will be available at http://localhost:3000. React needs the Node.js environment provided by npm start to translate JSX into regular JavaScript.
//npm start to run the app. The app will be available at http://localhost:3000
//Ctrl + C to stop the server