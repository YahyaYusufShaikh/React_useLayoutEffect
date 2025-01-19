
import { useEffect, useLayoutEffect } from 'react'
import './App.css'

function App() {
 
  useEffect(()=>{
    console.log("Hi from useEffect")
  }, [])

  useLayoutEffect(()=>{
    console.log("Hi from useLayoutEffect")
  }, [])

  return (
    <>
      <h1>Text Message</h1>
      {Array(40000).fill('').map((item, index)=>(<li key={index}>{Math.pow(Math.random(), 10)}</li>))}
    </>
  )
}

export default App
