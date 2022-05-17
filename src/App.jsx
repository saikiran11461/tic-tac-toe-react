import { useState } from 'react'
import  Tictactoe  from './components/Tictactoe'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Tictactoe/>
    </div>
  )
}

export default App
