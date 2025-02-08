import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {

  const [data, setdata] = useState([])

  const getData = async ()=>{
    
   const response = await  axios.get('https://picsum.photos/v2/list')
    
   setdata(response.data);
   console.log(data);
   
    
  }

  return (
    <>
     
    <div>
    <button onClick={getData} className='bg-red-500 w-30 h-10 text-white font-semibold rounded m-20 active:scale-90'>Get Data</button> 
    </div>
    
    <div className='p-3 -mt-19.5 bg-blue-700 text-white font-semibold '>Hello</div>
    {data.map((elem, idx)=>{
      return <div key={idx} className='bg-red-500 text-blue-500 flex align-center justify-between w-full px-5 py-6 rounded mb-3'> 
       
       <img src={elem } alt="" />
        

      </div>
     })}
    
    
    </>
  )
}

export default App