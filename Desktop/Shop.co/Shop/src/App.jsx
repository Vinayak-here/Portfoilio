import { useState } from 'react'
import { Button } from "@/components/ui/button"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-indigo-500 text-slate-400'>Hii</h1>

      <Button>Hi</Button>
    </>
  )
}

export default App
