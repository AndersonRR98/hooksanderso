import { useState } from 'react'
import { UserCard } from '../Components/UserCard'
import './Section.css'

import userImg from '../assets/futbol.png'
import user2Img from '../assets/baloncesto.png'
import user3Img from '../assets/tenis.png'

const users = [
  {
    id: 1,
    name: 'Futbol',
    description: 'Es un deporte de equipo donde juegan 11 jugadores por lado.',
    image: userImg
  },
  {
    id: 2,
    name: 'Baloncesto',
    description: 'Es un deporte de equipo donde juegan 5 jugadores por lado.',
    image: user2Img
  },
  {
    id: 3,
    name: 'Tenis',
    description: 'Es un deporte individual o en parejas (dobles).',
    image: user3Img
  },
]

export const Section = () => {
  const [count, setCount] = useState(0)

  return (
    <section className="users-section">
      <h1>Deportes</h1>
      <div className="users-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  )
}