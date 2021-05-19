import React, { Component } from 'react'

import login from '../css/login.css'


export default class Header extends Component {
    
 
componentDidMount(){
    
  let switchers = [...document.querySelectorAll('.switcher')];

  switchers.forEach(item => {
    item.addEventListener('click', function() {
      switchers.forEach(item => item.parentElement.classList.remove('is-active'))
      this.parentElement.classList.add('is-active')
    })
  })
}
 

  render() {
     


        return (
           <div>
        <body className="host_version">
<section className="forms-section">
    <div className="forms">
      <div className="form-wrapper is-active">
        <button onClick= " " type="button" className="switcher switcher-login">
          Login
          <span className="underline"></span>
        </button>
        <form className="form form-login">
          <fieldset>
            <legend>Please, enter your email and password for login.</legend>
            <div className="input-block">
              <label for="login-email">E-mail</label>
              <input id="login-email" type="email" required />
            </div>
            <div className="input-block">
              <label for="login-password">Password</label>
              <input id="login-password" type="password" required />
            </div>
          </fieldset>
          <button type="submit" className="btn-login">Login</button>
        </form>
      </div>
      <div className="form-wrapper">
        <button  type="button" class="switcher switcher-signup">
          Sign Up
          <span className="underline"></span>
        </button>
        <form className="form form-signup">
          <fieldset>
            <legend>Please, enter your email, password and password confirmation for sign up.</legend>
            <div className="input-block">
              <label for="signup-email">E-mail</label>
              <input id="signup-email" type="email" required />
            </div>
            <div className="input-block">
              <label for="signup-password">Password</label>
              <input id="signup-password" type="password" required />
            </div>
            <div className="input-block">
              <label for="signup-password-confirm">Confirm password</label>
              <input id="signup-password-confirm" type="password" required />
            </div>
          
            
          </fieldset>
          <button type="submit" className="btn-signup">Continue</button>
        </form>
      </div>
    </div>
  </section>
</body>

</div>
        );
    }
}
