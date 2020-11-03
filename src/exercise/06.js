// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef,useState} from 'react'

function UsernameForm({onSubmitUsername}) {

  const inputEl = useRef(null);
  const [input, setInput] = useState('')

  function handleSubmit(event){
    event.preventDefault()
    alert(inputEl.current.value)
    setInput('')
  }

  function handleChange(){
    const isLowerCase = inputEl.current.value === inputEl.current.value.toLowerCase()
    if(isLowerCase){
      setInput(inputEl.current.value)
    } 
  }

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
