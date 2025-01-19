import { Menu } from 'lucide-react';
import './BurgerButton.css';

const BurgerButton = ({ onClick }) => {
  return (
    <button className="burger-button" onClick={onClick}>
      <Menu size={24} />
    </button>
  );
};

export default BurgerButton;