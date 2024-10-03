import React from 'react'

const Child = ({name,maxPrice}) => {
    let highestPrice = maxPrice();
    console.count('Child re-rendered: ')
  return (
    <div>
        <h2>Child</h2>
        <p>My Name is {name} </p>
        <h3>Your max Price is {highestPrice} </h3>
    </div>
  )
}

export default React.memo(Child);