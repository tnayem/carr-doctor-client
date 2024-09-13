import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from '../../../assets/images/login/login.svg'

const Login = () => {
    const handleSubmit = e =>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);
    }
    return (
        <div className="container mx-auto">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 md:mr-12">
                        <img src={img} alt="Image" />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h1 className="text-4xl font-bold text-center">Login now!</h1>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#FF3811]" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center">Or Sign In with</p>
                        <div className="text-5xl flex justify-around w-3/4 mx-auto my-5">
                        <Link><FaFacebook /></Link>
                        <Link><FaLinkedinIn /></Link>
                        <Link><FaGoogle /></Link>
                        </div>
                        <p className="text-center">Haven t an account? <Link to='/signup' className="text-[#FF3811]">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;