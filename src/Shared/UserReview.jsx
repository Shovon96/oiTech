import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const UserReview = () => {

    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()

    const handleReviewSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const image = user?.photoURL;
        const rating = form.rating.value;
        const comment = form.comment.value
        const review = { name, image, rating, comment }
        // console.log(review);
        
        // post in database rating info
        try {
            const reviewPost = await axiosPublic.post('/reviews', review);
            // console.log(productPost.data);
            if (reviewPost.data.insertedId) {
                toast.success('Thanks for your review!');
            }
            // navigate('');
        } catch (error) {
            // console.error('Error creating product:', error);

            // Show error toast
            toast.error(error.message)
        }

        form.reset();
        form.closest('dialog').close();
    }

    return (
        <div>
            <div>
                <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}>Review</button>
            </div>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Review This Room!</h3>
                    <form onSubmit={handleReviewSubmit}>
                        <input name="name" type="text" defaultValue={user.displayName} readOnly className="input input-ghost w-full max-w-xs" />
                        <input name="rating" type="text" placeholder="Please Reting This Room" className="input input-ghost w-full max-w-xs" />
                        <input name="comment" type="text" placeholder="Add a comment" className="input input-ghost w-full max-w-xs" /><br /><br />
                        <button className="btn btn-primary">Submit</button>
                        {/* <Link to='`/roomDetails' className="btn btn-primary">Submit</Link> */}
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default UserReview;