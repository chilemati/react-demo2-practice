import React, { useEffect, useState } from 'react';
import './about.css';
import reactLog from '../../assets/react.svg'
import viteLog from '/vite.svg';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { cartAtom } from '../atoms/cart';
import { useCount } from '../customHooks/useCount';

const About = () => {
  /* 
    let [count,setCount] = useState(0);

    > count is a variable returned by usesTate whose initial value is 0
    > setCount is a function returned by useSTate that enables you to updat  count when you want
    > 0 is the initial value of count
  
   */
  // let count = 0;
  // let [count,setCount] = useState(0);
  let [name,setName] = useState('Amadi Chile');
  let [cart,setCart] = useRecoilState(cartAtom);
  let clickCount = useRef(0);
  let {count,decrement,increment} = useCount(0)
  // to show 0, use clickCount.current
  // {current: 0}

  // function increment() {
  //   // count += 1;
  //   setCount(prev=> prev + 1)
  //   console.log(count)
  // }
  // function decrement() {
  //   // count += 1;
  //   setCount(prev=> prev - 1)
  
  // }
  console.count('Rendered: ')
  useEffect(()=> {
    alert('Page loaded');
  },[name])
  return (
    <div id='About' >
        <h2> Count: {count} | Name: {name} | Tracked Clicks: {clickCount.current} | Cart: {cart} </h2>
        <button className='outline' onClick={increment } >Count++</button>
        <button className='outline ml-2 ' onClick={decrement } >Count--</button>
        <button className='outline ml-2' onClick={()=> setName('John Doe') } >Update Name</button>
        <button className='outline ml-2' onClick={()=> clickCount.current += 1 } >Click tracker</button>
        <button className='outline ml-2' onClick={()=> setCart(prev=> prev+1) } >Add to Cart</button>
    </div>
  )
}

export default About