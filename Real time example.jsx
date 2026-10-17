import { useState } from "react";

function App() {
  const products = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 1000,
      category: "Laptop",
      rating: 4.8,
      emoji: "💻",
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: 500,
      category: "Smartphone",
      rating: 4.7,
      emoji: "📱",
    },
    {
      id: 3,
      name: "iPad Air",
      price: 300,
      category: "Tablet",
      rating: 4.6,
      emoji: "📲",
    },
    {
      id: 4,
      name: "Headphones",
      price: 150,
      category: "Audio",
      rating: 4.5,
      emoji: "🎧",
    },
    {
      id: 5,
      name: "Smart Watch",
      price: 200,
      category: "Wearable",
      rating: 4.4,
      emoji: "⌚",
    },
    {
      id: 6,
      name: "Gaming Console",
      price: 450,
      category: "Gaming",
      rating: 4.9,
      emoji: "🎮",
    },
  ];

  const [cart, setCart] = useState([]);

  // ADD TO CART
  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  // INCREASE QUANTITY
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // DECREASE QUANTITY
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // REMOVE PRODUCT
  const removeFromCart = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  // CLEAR CART
  const clearCart = () => {
    setCart([]);
  };

  // TOTAL ITEMS
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // TOTAL PRICE
  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <>
      <style>{`

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
          background: #f5f7fb;
          color: #1f2937;
        }

        /* NAVBAR */

        .navbar {
          height: 70px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 7%;
          box-shadow: 0 2px 15px rgba(0,0,0,0.08);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .logo {
          font-size: 26px;
          font-weight: bold;
          color: #4f46e5;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-links a {
          text-decoration: none;
          color: #555;
        }

        .cart-button {
          background: #4f46e5;
          color: white;
          border: none;
          padding: 11px 18px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
        }

        .cart-count {
          background: white;
          color: #4f46e5;
          padding: 2px 7px;
          border-radius: 50%;
          margin-left: 5px;
        }

        /* HERO */

        .hero {
          min-height: 350px;
          display: flex;
          align-items: center;
          padding: 60px 7%;
          color: white;

          background:
            linear-gradient(
              90deg,
              rgba(15,23,42,.95),
              rgba(15,23,42,.65)
            ),
            url("https://images.unsplash.com/photo-1498050108023-c5249f4df085");

          background-size: cover;
          background-position: center;
        }

        .hero h1 {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .hero p {
          color: #d1d5db;
          max-width: 500px;
          line-height: 1.7;
        }

        /* PRODUCTS */

        .products-section {
          padding: 60px 7%;
        }

        .section-title {
          margin-bottom: 30px;
        }

        .section-title small {
          color: #6366f1;
          font-weight: bold;
          letter-spacing: 2px;
        }

        .section-title h2 {
          font-size: 32px;
          margin-top: 8px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .product-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,.07);
          transition: .3s;
        }

        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 30px rgba(0,0,0,.13);
        }

        .product-image {
          height: 220px;
          background: linear-gradient(
            135deg,
            #eef2ff,
            #e0e7ff
          );

          display: flex;
          align-items: center;
          justify-content: center;

          position: relative;
        }

        .product-emoji {
          font-size: 100px;
          transition: .3s;
        }

        .product-card:hover
        .product-emoji {
          transform: scale(1.1);
        }

        .new-badge {
          position: absolute;
          top: 15px;
          left: 15px;

          background: #4f46e5;
          color: white;

          padding: 6px 10px;
          border-radius: 6px;

          font-size: 11px;
          font-weight: bold;
        }

        .product-info {
          padding: 20px;
        }

        .category {
          color: #6366f1;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
        }

        .product-info h3 {
          font-size: 21px;
          margin: 8px 0;
        }

        .rating {
          font-size: 14px;
          margin-bottom: 18px;
        }

        .product-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price {
          font-size: 22px;
          font-weight: bold;
        }

        .add-button {
          border: none;
          background: #111827;
          color: white;

          padding: 10px 16px;
          border-radius: 8px;

          cursor: pointer;
        }

        .add-button:hover {
          background: #4f46e5;
        }

        /* CART */

        .cart-section {
          padding: 60px 7%;
          background: white;
        }

        .cart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;

          margin-bottom: 30px;
        }

        .cart-header h2 {
          font-size: 32px;
        }

        .clear-button {
          background: #ef4444;
          color: white;
          border: none;

          padding: 10px 16px;
          border-radius: 8px;

          cursor: pointer;
        }

        .empty-cart {
          text-align: center;
          padding: 50px;
          background: #f8fafc;
          border-radius: 15px;
        }

        .empty-cart div {
          font-size: 60px;
          margin-bottom: 15px;
        }

        .cart-container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
        }

        .cart-items {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .cart-item {
          display: flex;
          align-items: center;
          gap: 20px;

          background: #f8fafc;
          padding: 18px;
          border-radius: 12px;
        }

        .cart-item-icon {
          width: 80px;
          height: 80px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #e0e7ff;
          border-radius: 10px;

          font-size: 40px;
        }

        .cart-item-info {
          flex: 1;
        }

        .cart-item-info h3 {
          margin-bottom: 5px;
        }

        .cart-item-price {
          color: #6366f1;
          font-weight: bold;
        }

        .quantity {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .quantity button {
          width: 30px;
          height: 30px;

          border: none;
          background: #e5e7eb;

          border-radius: 6px;
          cursor: pointer;

          font-size: 18px;
        }

        .quantity span {
          font-weight: bold;
        }

        .remove-button {
          border: none;
          background: transparent;
          color: #ef4444;

          font-size: 20px;
          cursor: pointer;
        }

        /* SUMMARY */

        .summary {
          background: #111827;
          color: white;

          padding: 25px;
          border-radius: 15px;

          height: fit-content;
        }

        .summary h3 {
          font-size: 22px;
          margin-bottom: 20px;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;

          padding: 12px 0;
          border-bottom: 1px solid #374151;
        }

        .summary-total {
          display: flex;
          justify-content: space-between;

          font-size: 22px;
          font-weight: bold;

          margin-top: 20px;
        }

        .checkout-button {
          width: 100%;

          border: none;
          background: #6366f1;
          color: white;

          padding: 14px;
          margin-top: 25px;

          border-radius: 8px;
          cursor: pointer;

          font-size: 16px;
          font-weight: bold;
        }

        .checkout-button:hover {
          background: #818cf8;
        }

        /* FOOTER */

        footer {
          background: #0f172a;
          color: white;
          text-align: center;
          padding: 35px;
        }

        footer h2 {
          color: #818cf8;
          margin-bottom: 8px;
        }

        footer p {
          color: #9ca3af;
        }

        /* RESPONSIVE */

        @media(max-width: 900px) {

          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .cart-container {
            grid-template-columns: 1fr;
          }

          .nav-links {
            display: none;
          }
        }

        @media(max-width: 600px) {

          .product-grid {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            font-size: 36px;
          }

          .cart-item {
            flex-wrap: wrap;
          }
        }

      `}</style>

      {/* NAVBAR */}

      <header className="navbar">

        <div className="logo">
          TechStore
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#cart">Cart</a>
        </nav>

        <button
          className="cart-button"
          onClick={() =>
            document
              .getElementById("cart")
              .scrollIntoView({
                behavior: "smooth",
              })
          }
        >
          🛒 Cart

          <span className="cart-count">
            {totalItems}
          </span>
        </button>

      </header>

      {/* HERO */}

      <section className="hero" id="home">

        <div>
          <h1>
            Modern Technology
            <br />
            For Everyone
          </h1>

          <p>
            Discover premium laptops, smartphones,
            tablets, headphones and more.
          </p>
        </div>

      </section>

      {/* PRODUCTS */}

      <section
        className="products-section"
        id="products"
      >

        <div className="section-title">

          <small>
            OUR COLLECTION
          </small>

          <h2>
            Featured Products
          </h2>

        </div>

        <div className="product-grid">

          {products.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <div className="product-image">

                <span className="new-badge">
                  NEW
                </span>

                <div className="product-emoji">
                  {product.emoji}
                </div>

              </div>

              <div className="product-info">

                <div className="category">
                  {product.category}
                </div>

                <h3>
                  {product.name}
                </h3>

                <div className="rating">
                  ⭐ {product.rating}
                </div>

                <div className="product-bottom">

                  <div className="price">
                    ${product.price.toFixed(2)}
                  </div>

                  <button
                    className="add-button"
                    onClick={() =>
                      addToCart(product)
                    }
                  >
                    🛒 Add
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CART */}

      <section
        className="cart-section"
        id="cart"
      >

        <div className="cart-header">

          <h2>
            🛒 Your Cart
          </h2>

          {cart.length > 0 && (

            <button
              className="clear-button"
              onClick={clearCart}
            >
              Clear Cart
            </button>

          )}

        </div>

        {cart.length === 0 ? (

          <div className="empty-cart">

            <div>
              🛒
            </div>

            <h3>
              Your cart is empty
            </h3>

            <p>
              Add some products to get started!
            </p>

          </div>

        ) : (

          <div className="cart-container">

            {/* CART ITEMS */}

            <div className="cart-items">

              {cart.map((item) => (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  <div className="cart-item-icon">
                    {item.emoji}
                  </div>

                  <div className="cart-item-info">

                    <h3>
                      {item.name}
                    </h3>

                    <div className="cart-item-price">
                      ${item.price.toFixed(2)}
                    </div>

                  </div>

                  {/* QUANTITY */}

                  <div className="quantity">

                    <button
                      onClick={() =>
                        decreaseQuantity(
                          item.id
                        )
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.id
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                  {/* ITEM TOTAL */}

                  <strong>
                    $
                    {(
                      item.price *
                      item.quantity
                    ).toFixed(2)}
                  </strong>

                  {/* REMOVE */}

                  <button
                    className="remove-button"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    🗑️
                  </button>

                </div>

              ))}

            </div>

            {/* SUMMARY */}

            <div className="summary">

              <h3>
                Order Summary
              </h3>

              <div className="summary-row">

                <span>
                  Items
                </span>

                <span>
                  {totalItems}
                </span>

              </div>

              <div className="summary-row">

                <span>
                  Subtotal
                </span>

                <span>
                  ${totalPrice.toFixed(2)}
                </span>

              </div>

              <div className="summary-row">

                <span>
                  Delivery
                </span>

                <span>
                  FREE
                </span>

              </div>

              <div className="summary-total">

                <span>
                  Total
                </span>

                <span>
                  ${totalPrice.toFixed(2)}
                </span>

              </div>

              <button
                className="checkout-button"
                onClick={() =>
                  alert(
                    `Order placed successfully! Total: $${totalPrice.toFixed(
                      2
                    )}`
                  )
                }
              >
                Proceed to Checkout →
              </button>

            </div>

          </div>

        )}

      </section>

      {/* FOOTER */}

      <footer>

        <h2>
          TechStore
        </h2>

        <p>
          Modern technology. Better lifestyle.
        </p>

      </footer>

    </>
  );
}

export default App;