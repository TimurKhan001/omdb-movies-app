import React from 'react'
import { Link } from 'react-router-dom'

import Button from './Button'

interface NavigationProps {
  toggleDarkMode: () => void
  isDarkMode: boolean
}

const Navigation: React.FC<NavigationProps> = ({
  toggleDarkMode,
  isDarkMode,
}) => {
  return (
    <nav className="bg-custom-light-background dark:bg-netflix-dark-background p-4">
      <ul className="flex justify-between items-center text-custom-light-text dark:text-netflix-dark-text">
        <div className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="hover:underline">
              Favorites
            </Link>
          </li>
        </div>
        <Button
          text={isDarkMode ? 'Light Mode' : 'Dark Mode'}
          handleClick={toggleDarkMode}
        />
      </ul>
    </nav>
  )
}

export default Navigation
