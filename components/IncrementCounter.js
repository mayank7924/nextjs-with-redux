import React, { useState } from "react";

const IncrementCounter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>
        Counter: <span>{counter}</span>
      </h1>
      <button onClick={() => setCounter(count + 1)}>Add To Count</button>
    </div>
  )
}

export default IncrementCounter
