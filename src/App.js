import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';

function App() {
  // 1. STATE: Holds the master array of all tasks
  const [tasks, setTasks] = useState([]);
  
  // 2. STATE: Holds the current filter ('all', 'completed', or 'incomplete')
  const [filter, setFilter] = useState('all');

  // 3. FUNCTION: Adds a new task
  function addTask(taskText) {
    const newTask = { 
      id: Date.now(), // Generates a unique ID
      text: taskText, // The text from the form
      completed: false // New tasks are not completed by default
    };
    setTasks([...tasks, newTask]); // Spread operator keeps old tasks and adds the new one
  }

  // 4. FUNCTION: Flips the completed status of a task
  function toggleTask(id) {
    setTasks(tasks.map(task => 
      // If the ID matches, flip the boolean. Otherwise, leave it alone.
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  // 5. FUNCTION: Removes a task
  function deleteTask(id) {
    // Keep only the tasks whose ID does NOT match the one we want to delete
    setTasks(tasks.filter(task => task.id !== id));
  }

  // 6. FUNCTION: Determines which tasks to show based on the filter state
  function getFilteredTasks() {
    if (filter === 'completed') {
      return tasks.filter(task => task.completed === true); // Only show completed
    }
    if (filter === 'incomplete') {
      return tasks.filter(task => task.completed === false); // Only show incomplete
    }
    return tasks; // If filter is 'all', return the whole list
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
              
              {/* Pass the current filter state and the setter function */}
              <FilterButtons filter={filter} onFilterChange={setFilter} />
              
              {/* Pass the RESULT of getFilteredTasks(), not the whole array */}
              <TodoList 
                tasks={getFilteredTasks()} 
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