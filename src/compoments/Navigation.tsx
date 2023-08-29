import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { ReactComponent as MoonIcon } from '../assets/moon.svg'
import { ReactComponent as SunIcon } from '../assets/sun.svg'
import { setDarkMode } from '../store/slices/appData'
import type { RootState } from '../store/store'

import Switch from './misc/Switch'

const Navigation: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.appData.darkMode)
  const dispatch = useDispatch()

  const toggleDarkMode = () => {
    dispatch(setDarkMode(!darkMode))
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

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
        <div className="flex row-auto justify-start items-center">
          <SunIcon className="w-5 h-5 mr-2 dark:fill-white" />
          <Switch isOn={darkMode} handleToggle={toggleDarkMode} />
          <MoonIcon className="w-5 h-5 ml-2 dark:fill-white" />
        </div>
      </ul>
    </nav>
  )
}

export default Navigation
