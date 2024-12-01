import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Signup_Form = () => {
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        student_id: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(userDetails.password !== userDetails.confirmPassword){
            alert("Passwords don't match")
        }

        const finalDetails = {
            name: userDetails.name,
            email: userDetails.email,
            student_id: userDetails.student_id,
            password: userDetails.password
        }
        try {
            const response = await fetch(`${import.meta.env.VITE_DEPLOY_API}/users/signup`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(finalDetails)
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            alert("Registration successful!")
            navigate('/home')
          } catch (error) {
            console.error("Error fetching greetings:", error);
          }

        console.log(userDetails)
        setUserDetails({ 
            name: '',
            email: '',
            student_id: '',
            password: '',
            confirmPassword: ''
        })
    }

    return (
        <div className='bg-white w-96 p-5 rounded-lg' style={{ height: "42rem" }}>
            <h2 className='text-center text-2xl font-bold'>Sign Up</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <label className='rounded-lg' htmlFor="name">Name:</label>
                <input onChange={e => setUserDetails({ ...userDetails, name: e.target.value })} value={userDetails.name} style={{ padding: "0.6rem" }} className='p-1 bg-gray-300' type="text" id="name" name="name" required />

                <label className='rounded-lg' htmlFor="email">Email:</label>
                <input onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} value={userDetails.email} style={{ padding: "0.6rem" }} className='p-1 bg-gray-300' type="email" id="email" name="email" required />

                <label className='rounded-lg' htmlFor="ID">Student ID:</label>
                <input onChange={e => setUserDetails({ ...userDetails, student_id: e.target.value })} value={userDetails.student_id} style={{ padding: "0.6rem" }} className='p-1 bg-gray-300' type="text" id="username" name="username" required />

                <label className='rounded-lg' htmlFor="password">Password:</label>
                <input onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} value={userDetails.password} style={{ padding: "0.6rem" }} className='p-1 bg-gray-300' type="password" id="password" name="password" required />

                <label className='rounded-lg' htmlFor="confirmPassword">Confirm Password:</label>
                <input onChange={e => setUserDetails({ ...userDetails, confirmPassword: e.target.value })} value={userDetails.confirmPassword} style={{ padding: "0.6rem" }} className='p-1 bg-gray-300' type="password" id="confirmPassword" name="confirmPassword" required />

                <button type='submit' className='bg-green-500 p-3 rounded-lg'>Sign Up</button>
                <p className='text-center'>Already have an account? Login here: <NavLink className='text-blue-400' to="/">Link</NavLink></p>
            </form>
        </div>
    )
}

export default Signup_Form
