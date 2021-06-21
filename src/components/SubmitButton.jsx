import React from 'react'
import moduleCss from '../styles/SubmitButton.module.css'


const SubmitButton = () => {
  return (
    <div className={moduleCss.container}>
      <input type="submit" value="Submit"
        className="px-4 py-1 text-xs font-medium leading-6 text-center text-white transition bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none"
      >
      </input>
    </div>
  )
}

export default SubmitButton
