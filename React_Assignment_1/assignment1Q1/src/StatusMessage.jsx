import React from 'react'

function StatusMessage({status}) {
  let stat;
    if (status==="success") {
            stat="Operation was successful";
    }
    else{
      stat="there was an error";
    }
    
  return (
    <div>
        <p className='text-black'>Hello</p>
        <p className='text-black'>{stat}</p>
    </div>
  )
}

export default StatusMessage;