import { useState } from 'react';
import './UserCard.css';

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = () => setState(!state);
  return [state, toggle];
};

export const UserCard = ({ user }) => {
  const [isContacted, toggleContact] = useToggle(false);

  const { name, description, image } = user;

  return (
    <div className='user-card'>
      <img className='user-image' src={image} alt={name} />
      <h2 className='user-name'>{name}</h2>
      <p className='user-description'>{description}</p>
      <button
        className={`contact-btn ${isContacted ? 'contacted' : ''}`}
        onClick={toggleContact}
      >
        {isContacted ? 'Contactado ✓' : 'Contactar'}
      </button>
    </div>
  );
};