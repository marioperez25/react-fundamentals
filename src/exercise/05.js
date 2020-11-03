// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

function Box(props){
  return(
    <div
      className={`box box--${props.size}` }
      style={{
        fontStyle: 'italic',
        backgroundColor: props.color
      }}
    >{props.text}</div>
  )
}

function App() {
  return (
    <div>
      <Box
        color="lightblue"
        size="small"
        text='small lightblue box'
      />
      <Box
        color="pink"
        size="medium"
        text='medium pink box'
      />
      <Box
        color="orange"
        size="large"
        text='large orange box'
      />
    </div>
  )
}

export default App
