import { useState } from 'react'
import './App.css'
import TabForm from './Components/TabForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
          <TabForm></TabForm>
      </div>
    </>
  )
}

export default App
