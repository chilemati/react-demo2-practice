import React, { useCallback, useMemo, useState } from 'react'
import './car.css';
import style from '../../global.module.css';
import LazyImage from '../lazy/LazyImage';
import vite from '/vite.svg'
import { useCount } from '../customHooks/useCount';
import Child from '../child/Child';

const Car = ({type,price}) => {

  let {count,increment} = useCount(5);
  let [name,setName] = useState('John Doe')

  function handleBuy1(e) {
    console.log('1',e.target.parentElement,e)
    alert('Are you sure?')
  }
  function handleBuy2(e) {
    console.log('2')
    alert('Are you sure?',e.target)
  }
  console.count('Car re-rendered: ');

  let prices = [111,333,555,888,22,89,67];
  function getTotalPrice(arr) {
    console.count('getTotal price ran: ')
    return arr.reduce((a,b)=> a+=b);
  }
  
  const maxPrice = useCallback(()=>{
    console.count('max price ran: ')
    return Math.max(...prices);
  },[])

  // const fuctionName = useCallback(()=> {

  // },[])

  let totalPrice = useMemo(()=>getTotalPrice(prices),[name])
  return (
    <div id='Car' >
      {/* ternary operator */}
      <LazyImage image={{src: 'https://t3.ftcdn.net/jpg/05/72/47/58/360_F_572475880_MK9dKTyixwx9RNrFa5WrLCHv10i3S2UG.jpg',caption: 'Giant Octopus'}} />
      <LazyImage image={{src: vite,caption: 'vite logo'}} />
      {/* count */}
        <button className='outline outline-1 p-1 rounded-md' onClick={increment} > Count: {count} </button> 
        <button className='outline outline-1 p-1 rounded-md' onClick={()=> setName('Amadi Chile')} > update name </button> 
        <h4>Total Price = {totalPrice} </h4>
        <Child maxPrice={maxPrice} name={name} />
      <h2>I'm a Car. my type is {type?type: 'Ford'} </h2>
      {/* conditional rendering */}
      {
        price && <>
        <p>If you like, you can buy me for just ${price} only. </p>
        <button onClick={()=> alert('Are you sure?')} >By Now</button>
        <button onClick={(e)=> handleBuy1(e) } >By Now1</button>
        <button onMouseEnter={handleBuy2 } >By Now2</button>
        </>

      }

      <p style={{color: 'white',backgroundColor: 'black',padding: '1rem'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, officiis. Molestias ducimus facere inventore ipsa necessitatibus quod. Cupiditate dolor veniam praesentium rerum!</p>

      <div className="box">
        <h3 className={style.h3} >Heading 3 </h3>
        <p className={style.p} >Lorem ipsum dolor sit amet.</p>
      </div>

      <hr />
      <LazyImage image={{src: 'https://media.istockphoto.com/id/535499464/photo/the-anvil-morning-mist.jpg?s=612x612&w=0&k=20&c=lSr-9Bag_toChbH53Ji8KoUi_xo8n7gWgLCsn7NDbAI=',caption:'Jungle Image'}} />
      <LazyImage image={{src: 'https://media.istockphoto.com/id/465383082/photo/female-swimmer-at-the-swimming-pool.jpg?s=612x612&w=0&k=20&c=tcTwN2rTvUBK4wddan_GUCxrXX6bBoU-hyrVMvmT0BM='}} />

    </div>
  )
}

export default Car