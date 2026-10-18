import { useState } from 'react'; //Imports the hook to remember what the user types in the input field. React hooks are built-in JS functions that let functional components "hook into" React's underlying features. useState is a hook that lets you add React state to functional components. 


function AddTodoForm({ onAdd }) {//Destructs the onAdd prop passed from App.js
  const [inputText, setInputText] = useState('');// Creates state to hold the input value.

  function handleSubmit(event) { //Runs when the form is submitted
    event.preventDefault(); //Stops the browser from submitting the page.
    if (inputText.trim() === '') return; //Ignores empty submissions
    
    onAdd(inputText); //Sends the text up to App.js.
    setInputText(''); // Clears the input box after submitting.
  }

  return (
    <form onSubmit={handleSubmit}>
      {/*Comments INSIDE the return need curly braces!!! */}
      <input 
        type="text" 
        placeholder="Add a new task..." 
        value={inputText} // The input box value is controlled by React.
        onChange={(event) => setInputText(event.target.value)} //Updates state on every keystroke.
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTodoForm; // Makes this available for App.js to import.

//npm start to run the app. The app will be available at http://localhost:3000
//Ctrl + C to stop the server