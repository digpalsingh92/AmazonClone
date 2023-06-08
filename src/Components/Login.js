import React, {useState} from 'react';
import StorefrontIcon from "@mui/icons-material/Storefront";
import "./login.css";
import {Link} from"react-router-dom";

export default function Login() {

    const [email,  setEmail] = useState('');
    const [password,  setPassword] = useState('');

  return (
    <div className='login'>
        <Link to='/' style={{textDecoration : "none"}}>
        <div className="login__logo">
        <StorefrontIcon className="login__logoImage" fontSize="large" />
        <h2 className="login__logoTitle">eShop</h2>
      </div> 
      </Link>

      <div className="conatiner">
        <h1>Sign-in</h1>

        <form>
            <span>E-mail</span>
            <input type="email"  value={email} onChange={e => setEmail(e.target.value)} />

            <span>Password</span>
            <input type="password"   value={password} onChange={e => setPassword(e.target.value)} />

            <button type='submit' className='login_Button' >Sign In</button>

            <p>By Signing-in you agree to the Eshop Website Conditions of USe & sale. Please see our Privacy Notice, our cookies Notice and our Terms and Conditions.</p>

            <button className='register_button'>Create Your eShop Account</button>
        </form>
      </div>
    </div>
  )
}
