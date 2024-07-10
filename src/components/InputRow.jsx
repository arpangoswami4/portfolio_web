import React from 'react'

const InputRow = ({children}) => {
  return (
    <div className='flex flex-row my-6 gap-x-4 '>
      {children}
    </div>
  )
}

export default InputRow