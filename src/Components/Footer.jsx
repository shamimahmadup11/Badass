// src/Components/Footer.jsx


import { FaBeer, FaSearch, FaCog, FaTrash, FaQuestionCircle } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-cyan-400 text-black p-4">
      <div className="flex justify-around">
        <div className="flex flex-col items-center  cursor-pointer">
          <FaBeer size={24} />
          <span>Convert</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <FaTrash size={24} />
          <span>Remove</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <FaSearch size={24} />
          <span>Search</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <FaCog size={24} />
          <span>Settings</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <FaQuestionCircle size={24} />
          <span>Support</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
