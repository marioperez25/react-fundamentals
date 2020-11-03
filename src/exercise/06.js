// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef,useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  const inputEl = useRef(null);
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event){
    event.preventDefault()
    alert(inputEl.current.value)
    setInput('')
  }

  function handleChange(){
    const isLowerCase = inputEl.current.value === inputEl.current.value.toLowerCase()
    if(isLowerCase){
      setInput(inputEl.current.value)
      setError(null)
    } else {
      setError('Username must be lower case')
    }
  }
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form
      onSubmit={handleSubmit}
    >
      <div>

        <label
          htmlFor="username"
          >Username:</label>
        <input
          onChange={handleChange}
          name="username"
          ref={inputEl} 
          value={input}
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
