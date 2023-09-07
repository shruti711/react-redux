import ProductItem from './ProductItem';
import './Product.css';

const DummyProducts = [
  {
    id: "p1",
    title: "Rich Dad Poor Dad",
    price: 4,
    description: "Best book I ever read"
  },
  {
    id: "p2",
    title: "Second book",
    price: 7,
    description: "Second Best biik I ever read"
  },
  {
    id: "p3",
    title: "Third book",
    price: 9,
    description: "Third Best biik I ever read"
  }
]

const Products = (props) => {
  return (
    <section className="Products">
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProducts.map((product) => {
          return (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
          )
        })}
      </ul>
    </section>
  );
};

export default Products;
