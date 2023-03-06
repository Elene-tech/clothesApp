import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import PropTypes from 'prop-types';

const Products = (props) => {
  const [products] = useState(productsData);

  return (
    <section>
      {products.map((products) => (
        <Product key={products.name} {...products} />
      ))}
    </section>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Products;
