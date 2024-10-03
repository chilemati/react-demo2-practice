import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    let redir = useNavigate()
  return (
    <div className='flex flex-col min-h-[80vh] items-center justify-center gap-4 '>
        <p className="text-red-600 font-Raleway font-bold text-3xl ">404. Page not found</p>
        <button onClick={()=> redir('/') } >Return Home</button>
    </div>
  )
}

export default Error