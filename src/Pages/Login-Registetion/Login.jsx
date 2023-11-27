import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import SocialLogin from '../../Shared/SocialLogin';

const Login = () => {

    const [disabled, setDisabled] = useState(true)
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const capchaRef = useRef()

    const from = location.state?.from?.pathname || '/home'

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(() => {
                toast.success('Successfully Login!')
            })
            .catch(err => {
                toast.error(err.messsage)
            })
        navigate(from, { replace: true })
    }

    const handleValidateCaptcha = () => {
        const userCaptchaValue = capchaRef.current.value;
        // console.log(userCaptchaValue);
        if (validateCaptcha(userCaptchaValue, false)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <>
            {/* <Helmet>
                <title>Home | SignIn</title>
            </Helmet> */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row w-full">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-4xl text-center font-extrabold text-blue-600 pt-3">Please SignIn</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input disabled={!disabled} name="captcha" onChange={handleValidateCaptcha} ref={capchaRef} type="text" placeholder="Type the above" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn bg-blue-600 hover:bg-blue-700  text-white font-bold text-lg ">Login</button>
                            </div>
                        </form>
                        <div className='mb-2'>
                            <SocialLogin></SocialLogin>
                        </div>
                        <p className="text-center mb-3"><small>New here ? <Link to='/register' className='text-blue-600 hover:underline'>Create an account</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;