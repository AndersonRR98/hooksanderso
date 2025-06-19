import { useState } from 'react'
import './UserCard.css'

export const UserCard = ({ user }) => {
  const [isContacted, setIsContacted] = useState(false)
  const { id, name, description, image } = user

  const handleClick = () => {
    setIsContacted(!isContacted)
  }

  return (
    <div className='user-card'>
      <img className='user-image' src={image} alt={name} />
      <h2 className='user-name'>{name}</h2>
      <p className='user-description'>{description}</p>
      <button 
        className={`contact-btn ${isContacted ? 'contacted' : ''}`}
        onClick={handleClick}
      >
        {isContacted ? 'Contactado ✓' : 'Contactar'}
      </button>
    </div>
  )
}