import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
  // 1. State to hold the master list of tasks
  const [tasks, setTasks] = useState([]);

  // 2. Function to ADD a task (takes the text from the form)
  function addTask(taskText) {
    const newTask = { 
      id: Date.now(), // Generates a unique ID using the current timestamp
      text: taskText, 
      completed: false 
    };
    setTasks([...tasks, newTask]); // Spreads the old array and adds the new task
  }

  // 3. Function to TOGGLE complete status (takes the ID of the clicked task)
  function toggleTask(id) {
    setTasks(tasks.map(task => 
      // If the task ID matches the clicked ID, flip 'completed' true/false
      // Otherwise, return the task exactly as it was
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  // 4. Function to DELETE a task (takes the ID of the clicked task)
  function deleteTask(id) {
    // .filter() keeps only the tasks where the ID does NOT match the clicked ID
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/todos">Todos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

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
              {/* Pass the addTask function to the form */}
              <AddTodoForm onAdd={addTask} />
              
              {/* Pass the tasks list AND the toggle/delete functions down the chain */}
              <TodoList 
                tasks={tasks} 
                onToggle={toggleTask} 
                onDelete={deleteTask} 
              />
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