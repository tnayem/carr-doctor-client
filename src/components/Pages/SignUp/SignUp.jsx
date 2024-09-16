import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from '../../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSubmit = e =>{
        e.preventDefault()
        const form = e.target 
        // const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        createUser(email,password)
        .then(result=>{
            const user = result.user 
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="container mx-auto">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 md:mr-12">
                        <img src={img} alt="Image" />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                        <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#FF3811]" type="submit" value="Signup" />
                            </div>
                        </form>
                        <p className="text-center">Or Sign In with</p>
                        <div className="text-5xl flex justify-around w-3/4 mx-auto my-5">
                            <Link><FaFacebook /></Link>
                            <Link><FaLinkedinIn /></Link>
                            <Link><FaGoogle /></Link>
                        </div>
                        <p className="text-center">Haven an account? <Link to='/login' className="text-[#FF3811] font-bold">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;