import React from 'react'
import axios from 'axios';



function Login() {
  return (
    <div >
    <form onSubmit={(e) => login(e)}>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    
  </div>
  )
}

function login(e){
    e.preventDefault();
    let request = {
      email: document.getElementById('exampleInputEmail1').value,
      password: document.getElementById('exampleInputPassword1').value
    }
    axios.post('http://localhost:3000/login',request)
    .then(res =>{

      alert(res.data.message);
      
    //  if(res.data.message === "successfully login"){

    //     axios.post('http://localhost:3000/home')
    //     .then(res=>{
    //     })


      // display(res)
      //alert(res.data.message);

      // }
    })
    .catch(err =>{
      console.log(err);
    })

  }

export default Login