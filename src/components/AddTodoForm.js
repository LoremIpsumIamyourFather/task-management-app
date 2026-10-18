import { useState } from 'react';

function AddTodoForm({ onAdd }) { // Receives the onAdd function as a prop
  // STATE: Holds the text the user is currently typing
  const [inputText, setInputText] = useState('');

  function handleSubmit(event) {
    event.preventDefault(); // Stops the page from refreshing when Enter is hit.
    
    if (inputText.trim() === '') return; // Don't add blank tasks
    
    onAdd(inputText); // Sends the text up to App.js
    setInputText(''); // Clear the input box
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add a new task..." 
        value={inputText} // The input is tied to state
        onChange={(event) => setInputText(event.target.value)} // Update state on every keystroke
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTodoForm;

//npm start to run the app. The app will be available at http://localhost:3000
//Ctrl + C to stop the server