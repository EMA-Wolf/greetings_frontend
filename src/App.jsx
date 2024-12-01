// import { useState } from "react";
// import GreetingForm from "./components/Greeting_Forms/GreetingForm";
// import GreetingList from "./components/Greetings_List/GreetingList";

// const App = () => {
//   const [editingGreeting, setEditingGreeting] = useState(null);

//   const handleCreateOrUpdate = async (data) => {
//     if (editingGreeting) {
//       // Update the greeting
//       await fetch(`${import.meta.env.VITE_DEPLOY_API}/greetings/${editingGreeting.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });
//     } else {
//       // Create a new greeting
//       await fetch(`${import.meta.env.VITE_DEPLOY_API}/greetings`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });
//     }
//     setEditingGreeting(null); // Reset the form
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8 space-y-8">
//       <h1 className="text-3xl font-bold text-center">Greeting Cards</h1>
//       <GreetingForm
//         onSubmit={handleCreateOrUpdate}
//         initialData={editingGreeting}
//       />
//       <GreetingList onEdit={setEditingGreeting} />
//     </div>
//   );
// };

// export default App;


import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Authpage from './pages/AuthPage/Authpage'
import Login_Form from './components/Login_Forms/Login_Form'
import Signup_Form from './components/Signup_Forms/Signup_Form'
const App = () => {
  return (
    <>
     <BrowserRouter>
            <Routes>

              <Route path='' element={<Authpage/>}>
                  <Route path='/' element={<Login_Form/>}></Route>
                  <Route path='/Signup' element={<Signup_Form/>}></Route>
              </Route>

              <Route path="/home" element={<Homepage />} />
            </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
