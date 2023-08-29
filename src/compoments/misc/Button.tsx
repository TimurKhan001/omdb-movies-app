// Button.tsx
import React from 'react'

type ButtonProps = {
  text: string
  handleClick: () => void
  variant?: 'default' | 'alert'
}

const Button: React.FC<ButtonProps> = ({
  text,
  handleClick,
  variant = 'default',
}) => {
  const getButtonClasses = () => {
    switch (variant) {
      case 'alert':
        return 'text-white px-4 py-2 rounded-md md:ml-4 transition-colors duration-300 dark:bg-red-600 dark:hover:bg-red-700 bg-gray-400 hover:bg-gray-500'
      default:
        return 'text-black dark:text-white px-4 py-2 rounded-md md:ml-4 transition-colors duration-300 dark:bg-gray-600 dark:hover:bg-gray-700 bg-gray-300 hover:bg-gray-300'
    }
  }

  return (
    <button onClick={handleClick} className={getButtonClasses()}>
      {text}
    </button>
  )
}

export default Button
