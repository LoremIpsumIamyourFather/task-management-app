
//App.js is the BOSS. It holds the list of tasks (tasks).
//AddTodoForm.js is the Employee. It holds the typing state (inputText). It takes the text and hands it to the Boss (onAdd).


import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
  // 1. Create the state to hold the tasks. App holds the list of tasks. 
const [tasks, setTasks] = useState([]);

  

  // 2. The function that adds a new task to the state.
  function addTask(taskText) {
    const newTask = { 
      id: Date.now(), // Generates a unique ID based on the current time.
      text: taskText, // The text the user typed.
      completed: false // Every new task starts as not completed.
    };// The spread operator (...tasks) copies the old array and adds the new task.
    setTasks([...tasks, newTask]);
  }
  // ...  addTask function is above here ...

  console.log("CURRENT TASKS:", tasks); 


  return (
    <BrowserRouter>
      {/* The Navigation Bar - always visible */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/todos">Todos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* The Traffic Cop - swaps components based on URL */}
      <Routes>
        <Route path="/" element={
          <div>
            <h1>Task Management App</h1>
            <p>Welcome! Choose Todos or Contact above.</p>
          </div>
        } />

        <Route 
          path="/todos" 
          element={
            <div>
              {/* Pass the addTask function down to the form as 'onAdd'*//*Comments w/i JSX must be wrapped in curly braces */ }
              <AddTodoForm onAdd={addTask} />

              {/* We pass the tasks array down to the lost as 'tasks'*/ }
              <TodoList tasks={tasks} />
            </div>
          } 
        />

        <Route path="/contact" element={<h1>Contact Page Coming Soon</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//npm start to run the app. The app will be available at http://localhost:3000
//Ctrl + C to stop the server