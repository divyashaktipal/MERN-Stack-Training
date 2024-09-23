import React from "react";

function Greeting({ name }) { // Destructuring the 'name' prop

  console.log(name); // Correctly log the name
  return (
    <div>
      <p>Hello {name}</p> {/* Correctly display the name */}
    </div>
  );
}

export default Greeting;
