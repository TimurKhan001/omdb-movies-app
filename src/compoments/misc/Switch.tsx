import React from 'react'

interface SwitchProps {
  isOn: boolean
  handleToggle: () => void
}

const Switch: React.FC<SwitchProps> = ({ isOn, handleToggle }) => (
  <div
    onClick={handleToggle}
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        handleToggle()
      }
    }}
    role="button"
    tabIndex={0}
    aria-pressed={isOn}
    className={`cursor-pointer w-12 h-6 flex items-center rounded-full p-1 ${
      isOn ? 'bg-blue-600 dark:bg-red-500' : 'bg-gray-300'
    }`}
    data-testid="dark-mode-toggle"
  >
    <div
      className={`transition-all duration-300 ease-in-out transform scale-100 bg-white w-5 h-5 rounded-full ${
        isOn ? 'translate-x-6' : 'translate-x-0'
      }`}
    />
  </div>
)

export default Switch
