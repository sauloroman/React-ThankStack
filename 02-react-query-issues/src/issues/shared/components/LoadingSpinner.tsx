import React from 'react'
import { FiRefreshCcw } from 'react-icons/fi'

export const LoadingSpinner: React.FC = () => {
  return (
    <div className='loading'>
      <div className="animate-spin">
        <FiRefreshCcw size={40} />
      </div>
    </div>
  )
}
