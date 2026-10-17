function App() {

      const products = [

        {
            id: 1,
            name: "Laptop",
            price: 1000
        },
        {
            id: 2,
            name: "Smartphone",
            price: 500
        },
        {
            id: 3,
            name: "Tablet",
            price: 300
        }
      ];

      return (
        <div>
            {products.map((product) => (
                <p key={product.id}>{product.name} - ${product.price.toFixed(2)}</p>
            ))}
        </div>
      );
    
    }
    export default App;