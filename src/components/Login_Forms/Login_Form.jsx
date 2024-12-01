import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const Login_Form = () => {
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({email:"", password:""})
 
    const handleSubmit =  async (e) => {
        e.preventDefault()
        // API call to authenticate user
        try {
            const response = await fetch(`${import.meta.env.VITE_DEPLOY_API}/users/login`,
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(userDetails)
                }
  
            );
            const data = await response.json();
            if(data.success === true) {
                // Redirect to home page
                alert(data.message);
                navigate("/home")
            }
          } catch (error) {
            console.error("Error fetching greetings:", error);
          }

        // console.log(userDetails)
        // Reset form
        setUserDetails({email:"", password:""})
    }

  return (
    <div className='bg-white w-1/4 p-5 rounded-lg' style={{height:"23rem"}}>
        <h2 className='text-center text-2xl font-bold'>Login</h2>
       {/* Form */}
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <label className='rounded-lg' htmlFor="email">Email:</label>
        <input onChange={e=> setUserDetails({...userDetails,email:e.target.value})} value={userDetails.email} style={{padding:"0.6rem"}} className='p-1 bg-gray-300' type="email" id="username" name="username" required />

        <label className='rounded-lg' htmlFor="password">Password:</label>
        <input onChange={e=> setUserDetails({...userDetails,password:e.target.value})} value={userDetails.password} style={{padding:"0.6rem"}} className='p-1 bg-gray-300' type="password" id="password" name="password" required />

        <button type='submit' className='bg-green-500 p-3 rounded-lg'>Login</button>
        <p className='text-center'>Don't have an account, Sign up here: <NavLink className='text-blue-400' to="/Signup">Link</NavLink></p>
      </form>
    </div>
  )
}

export default Login_Form
