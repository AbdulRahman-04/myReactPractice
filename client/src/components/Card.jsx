import React from 'react'



const Card = (props) => {
  return (
    <>
     
     <div className="card bg-white h-50 w-50 rounded p-5 text-black-700 flex-coloumn text-start align-center mt-40 ml-120">

       <h4 className='text-start   mt-6' >Username: {props.username}</h4> 
       <h4>City: {props.city}</h4>
       <h4>Age: {props.age}</h4>
         

     </div>
     
    
    </>
  )
}

export default Card