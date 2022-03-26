import "./SignUp.css";
import logo from "/home/dp-dev06/Desktop/seperate-front-hardhat/frontend/src/images/mobiance-logo.png";

const SignUp = () => {
  return (
   
<div className=" text-center" style={{minHeight:'75vh'}}>
    
    <main className="form-signin">
      <form>
        <img className="mb-4" src={logo} alt="" width="170" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
    
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">wallet address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>
    {/* add  afriled for manifest deployed in ipfs and also choosing the group of the accoutn */}
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </main>
    
    
        
      </div>


  );
};

export default SignUp;
