import React from 'react'
import Base from '../core/Base'
import {Link} from 'react-router-dom'
const  Signin = () => {
    return (
        <Base>
            <form className="container" style={{width:'700px'}}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <Link to="/admin/dashboard">

  <button type="submit" className="btn btn-warning btn-block">Submit</button>

  </Link>
  
</form>
        </Base>
    )
}
export default Signin;
