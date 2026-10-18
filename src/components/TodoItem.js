function TodoItem({ task }) { //Destructuring the props. Component expects a task object to be passed to it.
  return (
    <li className="todo-item">
      <span>{task.text}</span> {/*Curly braces to inject the JS value (the text of the task) into the JSX */ }
    </li>
  );
}

export default TodoItem;

//npm start to run the app. The app will be available at http://localhost:3000
//Ctrl + C to stop the server