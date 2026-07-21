import { useState } from "react";
import validator from 'validator'

const labelStyles = 'block text-grey-700 font-medium mb-2'
const inputStyles = 'w-full px-3 py-2 border border-gray-300 rounded-md'
const buttonStyles = 'w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'


const Sandbox = () => {
  const [signupInput, setSignupInput] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const handleChange = () => {} 
  const handleSubmit = () => {}
  return (
    <div className="container mx-auto max-w-md mt-10 p-6 bg-white rounded-lg shadow-md">
      <form className='space-y-4t'>
          <div className="mb-3">
            <label htmlFor="email" className={labelStyles}>Email Address</label>
            <input type="email" id='email' value={signupInput.email} />
          </div>

      </form>

    </div>
  )
};
export default Sandbox;
