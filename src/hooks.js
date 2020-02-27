import React, { useState, useEffect } from 'react';

function Hooks(props) {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `React Hooks`;
  });
  check=()=>{
    console.log("jhgf");
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={()=>this.check()}>check</button>
    </div>
  );
}

export default Hooks;
