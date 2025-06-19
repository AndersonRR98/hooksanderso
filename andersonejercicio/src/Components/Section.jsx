import { useState } from 'react'
import { UserCard } from '../Components/UserCard'
import './Section.css'

import userImg from '../assets/mujer.png'
import user2Img from '../assets/farmaceutico.png'
import user3Img from '../assets/hombre.png'

const users = [
  {
    id: 1,
    name: 'Maguie Boo',
    description: 'Frontend Developer',
    image: userImg
  },
  {
    id: 2,
    name: 'Pepa Pombo',
    description: 'Backend Developer',
    image: user2Img
  },
  {
    id: 3,
    name: 'Lukas Toro',
    description: 'Fullstack Developer',
    image: user3Img
  },
]

export const Section = () => {
  const [count, setCount] = useState(0)

  return (
    <section className="users-section">
      <h1>personas</h1>
      <div className="users-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  )
}