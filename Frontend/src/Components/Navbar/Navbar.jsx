import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import crat_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_Dropdown from '../Assets/dropdown_icon.png'
import { useRef } from 'react';

const Navbar = () => {

    const [menu, setmenu] = useState("shop");
    const {getTotalCartitems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }


  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt='' />
            <p>SHOPPER</p>
        </div>
        <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_Dropdown} alt="" />
        <ul ref={menuRef} className="nav_menu">
            <li onClick={()=>{setmenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>} </li>
            <li onClick={()=>{setmenu("mens")}}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("womens")}}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("kids")}}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
            : <Link to='/login'><button>Login</button></Link>}
            <Link to='/cart'><img src={crat_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartitems()}</div>
        </div>
    </div>
  );
};

export default Navbar;
