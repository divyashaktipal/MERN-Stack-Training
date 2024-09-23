import React from 'react'

function ProfileCard({name,age,location}) {
  return (
    <div className='h-24 w-40 grid bg-lime-400 p-4 m-6 text-white'>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
         <p>Location:{location}</p>
    </div>
  )
}

export default ProfileCard