import React, { useState } from 'react'
import useForm from '../../hooks/useForm'

export const SignUpLogin = () => {
    const [userType, setUserType] = useState('Student')
    const [user, handleChange] = useForm()

  return (
    <div>
<select name="user_type" value={userType} onChange={handleChange} className="form-select">
         <option>Student</option>
         <option>Technical Mentor</option>
          </select>
    </div>
  )
}
