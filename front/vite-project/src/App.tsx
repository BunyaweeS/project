import { useState } from 'react'
import './App.css'
import Register from './page/register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register></Register>
    </>
  )
}

export default App
