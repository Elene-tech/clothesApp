import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import { useMemo, useState } from 'react';
import ProductForm from '../ProductForm/ProductForm';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentSizePrice, setCurrentSizePrice] = useState(
    props.sizes[0].additionalPrice
  );

  function getTotalPrice(a, b) {
    return a + b;
  }

  const getPrice = useMemo(
    () => getTotalPrice(props.basePrice, currentSizePrice),
    [props.basePrice, currentSizePrice]
  );

  const clickHandler = (event) => {
    event.preventDefault();

    const generalSummary = {
      name: props.title,
      price: getPrice,
      size: currentSize,
      color: currentColor,
    };

    console.log(generalSummary);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price:{getPrice}$</span>
        </header>
        <ProductForm
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          currentSize={currentSize}
          currentColor={currentColor}
          colors={props.colors}
          clickHandler={clickHandler}
          sizes={props.sizes}
          setCurrentSizePrice={setCurrentSizePrice}
          currentSizePrice={currentSizePrice}
          onClick={props.onClick}
        />
      </div>
    </article>
  );
};

export default Product;
