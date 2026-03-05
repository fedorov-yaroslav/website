import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Привет</h2>
      <p>Это мой личный сайт в Информационно-телекоммуникационной сети Интернет </p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnUwfncYXorPAjtljnLQ0r31A6Y20kersdw&s" alt=""/>
      <p>сайт находится в разработке...</p>
    </>
  )
}

export default App
