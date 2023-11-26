import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
    const {id} = useParams();
    const [products, setProducts] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/features/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id])
    console.log(products);
    console.log(id);

    return (
        <div>
            product details
        </div>
    );
};

export default ProductsDetails;