import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [animals, setAnimals] = useState([])
  useEffect(() => {
    const lastQuery = localStorage.getItem('lastQuery')
    HandleSearch(lastQuery)
  }, [])
  const HandleSearch = async (q) => {
    const res = await fetch('http://localhost:8080?' + new URLSearchParams({q}))
    const data = await res.json()
    setAnimals(data)

    localStorage.setItem('lastQuery', q)
  }

  return (
    <main className="App">
      <input
      type='text'
      placeholder="Search"
      onChange={(e) => HandleSearch(e.target.value)}
      />

      <ul>
        {animals.map(animal => (
          <Animal key={animal.id} {...animal}/>
        ))}
        {animals.length === 0 && 'No animals found'}
      </ul>
    </main>
  )
}
function Animal({type, name, age}) {
  return (
    <li>
      <strong>{type}</strong> {name} ({age} years old)
    </li>
  )
}
export default App
