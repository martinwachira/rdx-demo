import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Hamburger",
    price: 25,
    description: "Dummy Test for Food Lovers",
  },
  {
    id: "p2",
    title: "Study Table",
    price: 50,
    description: "Pristine study Table",
  },
  {
    id: "p3",
    title: "iTablet",
    price: 200,
    description: "Tech Gadget",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
