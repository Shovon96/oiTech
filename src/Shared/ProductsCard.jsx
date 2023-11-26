import { Link } from "react-router-dom";
import { BiSolidUpArrow } from "react-icons/bi";
const ProductsCard = ({ item }) => {
    const { _id, image, tags, timestamp, upvotes } = item
    return (
        <div>
            <div className="border rounded-md shadow-xl">
                <img className="h-56 w-full rounded-md" src={image} alt="" />
                <Link to={`/home/productsDetails/${_id}`}>
                    <h1 title="see details" className="text-2xl my-2 font-bold text-center hover:font-medium hover:text-blue-600 hover:underline">{item?.name}</h1>
                </Link>
                <div className="flex justify-between px-4 items-center py-2">
                    <div>
                        <div className="text-blue-700 flex gap-1">
                            {
                                tags?.map((tag, index) => <p key={index}><small>#{tag}</small></p>)
                            }
                        </div>
                        <p><small className="text-gray-400">{timestamp}</small></p>
                    </div>
                    <button title="vote"
                        className="border px-3 py-1 rounded-md bg-[#eab308] text-white font-semibold flex items-center gap-1">
                        Vote<BiSolidUpArrow />{upvotes}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProductsCard;