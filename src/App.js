//src/App.js (The Boss: Holds the state, the logic, and the routes)


// 1. IMPORTS: Swapped BrowserRouter for HashRouter (renamed to Router) 
// to prevent 404 errors when refreshing on GitHub Pages.
// Added Navigate to automatically redirect the user.
import { useState } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import ContactForm from './components/ContactForm';

function App() {
  // STATE: Holds the master array of all tasks (starts w/ an empty array)
  const [tasks, setTasks] = useState([]);
  
  // STATE: Holds the current filter ('all', 'completed', or 'incomplete')
  const [filter, setFilter] = useState('all');

  // FUNCTION: Adds a new task
  function addTask(taskText) {
    const newTask = { 
      id: Date.now(), // Generates a unique ID using the current timestamp
      text: taskText, // The text the user typed into the form
      completed: false // New tasks start as incomplete
    };
    // Spread operator (...tasks) keeps the old tasks and adds the new one to the end
    setTasks([...tasks, newTask]); 
  }

  // FUNCTION: Flips the completed status of a task
  function toggleTask(id) {
    setTasks(tasks.map(task => 
      // If the ID matches, flip the boolean. Otherwise, leave it alone.  
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  // FUNCTION: Removes a task
  function deleteTask(id) {
    // Keep only the tasks whose ID does NOT match the one to delete.  Keep only the tasks whose ID does NOT match the one we want to delete
    setTasks(tasks.filter(task => task.id !== id));
  }

  // FUNCTION: Determines which tasks to show based on the current filter state
  function getFilteredTasks() {
    if (filter === 'completed') {
      return tasks.filter(task => task.completed === true); // Only show completed
    }
    if (filter === 'incomplete') {
      return tasks.filter(task => task.completed === false); // Only show incomplete
    }
    return tasks; // If filter is 'all', return the entire list
  }

  return (
    <Router> {/* Changed from BrowserRouter to Router (HashRouter) */}
      <nav>
        <ul>
          {/* Home link removed because the assignment only requires Todos and Contact */}
          <li><Link to="/todos">Todos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        {/* REDIRECT: If the user goes to the root URL, automatically send them to /todos */}
        <Route path="/" element={<Navigate to="/todos" replace />} />

               <Route 
          path="/todos" 
          element={
            <div className="todo-container">
              {/* The todo-container class creates the side-by-side layout we added in CSS */}
              <div className="todo-left">
                <AddTodoForm onAdd={addTask} />
              </div>

              {/* Right side: The filter buttons and the task list */}
              <div className="todo-right">
                {/* Pass the current filter and the setter function down */}
                <FilterButtons filter={filter} onFilterChange={setFilter} />
                
                {/* Pass the filtered list and the toggle/delete functions down */}
                <TodoList 
                  tasks={getFilteredTasks()} 
                  onToggle={toggleTask} 
                  onDelete={deleteTask} 
                />
              </div>
            </div>
          }
        />

        <Route
          path="/contact"
          element={
            <div>
              <h1>Contact Us</h1>
              <ContactForm />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}



export default App;
//npm start to run the app. The app will be available at http://localhost:3000
//Ctrl + C to stop the server

