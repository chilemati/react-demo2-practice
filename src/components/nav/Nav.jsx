import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartAtom } from "../atoms/cart";
import { navData } from "./navData";
import { userAtom } from "../atoms/user";

/* 
  router step 4
  > replace all the a tag with Link tag
  > replace all href to to
*/
const Nav = () => {
  let cart = useRecoilValue(cartAtom);
  let [nav, setNav] = useState(navData);
  let [user,setUser] = useRecoilState(userAtom);

  useEffect(()=> {

    let upd = nav.map(each=> {
      // hide  on login
      if(['/login','/signup'].includes(each.to)){
        if(user.isLoggedIn === true) {
          each.show = false;
        }
        
      }
      // show on logout
      if(['/login','/signup'].includes(each.to)){
        if(user.isLoggedIn === false) {
          each.show = true;
        }
        
      }
      // show on login
      if(['#signout'].includes(each.to)){
        if(user.isLoggedIn === true) {
          each.show = true;
        }
        
      }
      // hide on logout
      if(['#signout'].includes(each.to)){
        if(user.isLoggedIn === false) {
          each.show = false;
        }
        
      }
      // show create for admin
      if(['/create'].includes(each.to)){
        if(user.data.role === 'Admin') {
          each.show = true;
        }
        
      }
      // hide create for none admin
      if(['/create'].includes(each.to)){
        if(user.data.role === 'normal') {
          each.show = false;
        }
        
      }
      return each
    })
    setNav(upd)

  },[user.isLoggedIn])

  function handleSignout() {
       setUser({isLoggedIn: false,data: {}})
  }

  
  return (
    <nav className="bg-black py-3 px-4 ">
      <ol className="flex items-center justify-between ">
        <li>
          <Link className="text-white font-graypen font-bold text-2xl " to="/">
            Logo
          </Link>
        </li>
        <li className="gap-5 flex items-center flex-row justify-center ">
          {nav.map((each) => (
            <Link onClick={()=> each.text === 'Signout' && handleSignout() } style={{display: each.show?'flex':'none'}} className="nav-link " key={each.id} to={each.to}>
              
              {each.text}
            </Link>
          ))}

          <Link className="nav-link " to="#">
            
            Cart[{cart}]
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Nav;
