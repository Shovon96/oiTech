import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form"
// import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Shared/SocialLogin";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic()

    const onSubmit = (data) => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(() => {
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    toast.success('Successfully Login!!')
                                    navigate('/home')
                                }
                            })
                    })
            })
            .catch(err => {
                toast.error(err.message)
            })
        reset()
    }

    return (
        <>
            {/* <Helmet>
                <title>Home | SignUp</title>
            </Helmet> */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row w-full">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-4xl text-center font-extrabold text-blue-600 pt-3">Please SignUp</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photo" {...register("photo", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />
                                {errors.photo && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email"  {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" {...register("password", { required: true, pattern: /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}/ })} type="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password should be must 6 charecter and one uppercase, one lowercase and special charecter, one number is required</span>}
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                        </form>
                        <div className="mb-2">
                            <SocialLogin></SocialLogin>
                        </div>
                        <p className="text-center mb-3"><small>You already have and account Go? <Link to='/home/login' className='text-blue-600 hover:underline'>SignIn</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;