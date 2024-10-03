import React, { useState } from 'react'

export const useCount = (c) => {
    let [count,setCount] = useState(c);

    function increment() {
        setCount(prev=> prev + 1)
      }
      function decrement() {
        setCount(prev=> prev - 1)
      
      }
  return {
    count: count,
    increment,
    decrement
  }
}

// {} the order of destructing is not important
// [] the order of destructing is important

