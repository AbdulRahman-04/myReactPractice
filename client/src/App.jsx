// import React, { useState } from 'react'

// const App = () => {

//   const [num, setnum] = useState(0);

//   const changeNum = () => {
//     if(num>=0){
//       setnum(num+1)
//     }
//   }

//   return (
//    <>

//     <h1> the number is {num}</h1>
//     <button onClick={changeNum}>Change number</button>

//    </>
//   )
// }

// export default App

// form handling in react

// import React from 'react'
// import './App.css'

// const App = () => {

//   let submitForm = (e) =>{
//     e.preventDefault();
//     console.log('Form submited ');

//   }

//   return (
//     <>

//      <form onSubmit={(e)=>{submitForm(e)}}>

//         <input className='text-white text-center bg-red-900 p-1.5 rounded mt-60 ml-120 block' type="text" placeholder='enter your name' />
//         <button className='bg-green-500 rounded p-1 mt-10 ml-120' type='submit'>Submit</button>

//      </form>

//     </>
//   )
// }

// export default App

// two way binding in react:

// import React, { useState } from 'react'
// import './App.css'

// const App = () => {

//  const [username, setusername] = useState('')

//  const submitForm = (e) =>{
//   e.preventDefault();
//   console.log(username);

//   setusername('')
//  }

//   return (
//     <>

//      <form onSubmit={(e)=>{submitForm(e)}} >

//         <input value={username} onChange={(e)=>{setusername(e.target.value)}} className='text-white text-center bg-red-900 p-1.5 rounded mt-60 ml-120 block' type="text" placeholder='enter your name' />
//         <button className='bg-green-500 rounded p-1 mt-10 ml-120' type='submit'>Submit</button>

//      </form>

//     </>
//   )
// }

// export default App

import React from "react";
import "./App.css";
import Cards from "./components/Cards";
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

const App = () => {
  return (
    <>
      {/* <Navbar />

     <Footer /> */}

      {/* <Card username= "Syed Abdul Rahman" city="Hyderabad" Age="20" /> */}

      <Cards  name="Abdul Rahman" age="20" city="Hyderabad"/>
    </>
  );
};

export default App;
