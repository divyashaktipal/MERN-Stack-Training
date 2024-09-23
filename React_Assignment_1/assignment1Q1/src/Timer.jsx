import React, { useState } from 'react'

const Timer = () => {
    const [start,setstart]=useState(0);
    const now = new Date();
    const time=now.getTime();

  return (
    <div>
        <button> </button>
    </div>
  )
}

export default Timer