import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [search, setSearch] = useState(0)
  const [animals, setAnimals] = useState([])

  const HandleSearch = (event) => {
    setSearch(event.target.value)
    console.log(search)
  }

  return (
    <main className="App">
      <input
      type='text'
      placeholder="Search"
      onChange={HandleSearch}
      />

      <ul>
        {animals.map(animal => (
          <li>
            <strong>{animal.type}</strong>{animal.name}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
