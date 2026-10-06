import { useEffect, useState } from "react";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }, []);

    return (
        <div>
            <h2>Products</h2>

            {products.map((product) => (
                <p key={product.id}>
                    {product.title}
                </p>
            ))}
        </div>
    );
}

export default Products;