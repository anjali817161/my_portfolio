import { NavLink } from 'react-router-dom';
import Profile from '../Images/Profile.jpg.jpeg';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-b from-teal-500 to-slate-300 shadow">
      <nav className="flex justify-between items-center p-4 shadow-md w-full mx-auto">
        <div className='flex justify-center items-center'>
           <img src='data:image/jpeg;base64,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' alt='logo' className='h-14 w-14 rounded-full opacity-100'/>
          <div className="text-2xl mx-4 font-bold text-sky-950">Anjali's Portfolio</div>
        </div>

        {/* Hamburger Icon for Mobile View */}
        <div className="md:hidden">
          <button onClick={toggleDropdown} className="focus:outline-none">
            <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Desktop View */}
        <div className="hidden md:flex space-x-6 mx-4 font-semibold text-gray-600">
          <NavLink exact to="/" className='hover:text-indigo-600 hover:shadow-sm text-lg' activeClassName='text-indigo-600' activeStyle={{ backgroundColor: 'black', color: 'white' }}>
            Home
          </NavLink>
          <NavLink to="/about" className='hover:text-indigo-600 hover:shadow-sm text-lg' activeClassName='text-indigo-600' activeStyle={{ backgroundColor: 'black', color: 'white' }}>
            About
          </NavLink>
          <NavLink to="/projects" className='hover:text-indigo-600 hover:shadow-sm text-lg' activeClassName='text-indigo-600' activeStyle={{ backgroundColor: 'black', color: 'white' }}>
            Projects
          </NavLink>
          <NavLink to="/certifications" className='hover:text-indigo-600 hover:shadow-sm text-lg' activeClassName='text-indigo-600' activeStyle={{ backgroundColor: 'black', color: 'white' }}>
            Certifications
          </NavLink>
          <NavLink to="/skills" className='hover:text-indigo-600 hover:shadow-sm text-lg' activeClassName='text-indigo-600' activeStyle={{ backgroundColor: 'black', color: 'white' }}>
            Skills
          </NavLink>
        </div>

        {/* Profile Section */}
        <div className="lg:flex items-center hidden">
          <img src={Profile} alt="Profile" className="w-16 h-16 rounded-xl" />
          <span className="ml-5 text-teal-800 text-xl font-serif">Profile</span>
        </div>
      </nav>

      {/* Dropdown Menu for Mobile View */}
      {isOpen && (
        <div className=" w-full shadow-2xl z-10">
          <div className="flex flex-col items-center">
            <NavLink
              exact
              to="/"
              className='w-full text-center py-2 hover:bg-teal-700 hover:text-white text-lg'
              activeStyle={{ backgroundColor: 'black', color: 'white' }}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className='w-full text-center py-2 hover:bg-teal-700 hover:text-white text-lg'
              activeStyle={{ backgroundColor: 'black', color: 'white' }}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className='w-full text-center py-2 hover:bg-teal-700 hover:text-white text-lg'
              activeStyle={{ backgroundColor: 'black', color: 'white' }}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Projects
            </NavLink>
            <NavLink
              to="/certifications"
              className='w-full text-center py-2 hover:bg-teal-700 hover:text-white text-lg'
              activeStyle={{ backgroundColor: 'black', color: 'white' }}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Certifications
            </NavLink>
            <NavLink
              to="/skills"
              className='w-full text-center py-2 hover:bg-teal-700 hover:text-white text-lg'
              activeStyle={{ backgroundColor: 'black', color: 'white' }}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Skills
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
