import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchUsersData();
  }, []);

  const fetchUsersData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{
                  height: "220px",
                  objectFit: "contain",
                }}
              />

              <div className="card-body d-flex flex-column">
                <h6 className="card-title">
                  {product.title}
                </h6>

                <p className="text-success fw-bold fs-5">
                  ${product.price}
                </p>

                <p className="text-muted">
                  {product.category}
                </p>

                <button className="btn btn-dark mt-auto">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;