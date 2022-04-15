import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { increment } from "../store/counterSlice";

const IncrementCounter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.count)
  return (
    <div>
      <h1>
        Counter: <span>{counter}</span>
      </h1>
      <button onClick={() => dispatch(increment())}>Add To Count</button>
    </div>
  )
}

export default IncrementCounter
