import React from 'react'
import style from '../../global.module.css';
import hero from './hero.module.css';

const Hero = () => {
  return (
    <div>
      <h2>Hero</h2>
      <div className="box">
        <h3>Heading 3 </h3>
        <p className={style.p} >Lorem ipsum dolor sit amet.</p>
        <a className={hero.a} href="#">Google</a>
      </div>
    </div>
  )
}

export default Hero