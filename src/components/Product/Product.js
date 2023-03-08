import styles from './Product.module.scss';

import Button from '../Button/Button';
import { useState } from 'react';
import ProductForm from '../ProductForm/ProductForm';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = () => {
    const foundSize = props.sizes.find(
      (element) => element.name === currentSize
    );
    return props.basePrice + foundSize.additionalPrice;
  };

  const clickHandler = (event) => {
    event.preventDefault();

    const generalSummary = {
      name: props.title,
      price: getPrice(),
      size: currentSize,
      color: currentColor,
    };

    console.log(generalSummary);
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price:{getPrice()}$</span>
        </header>
        <ProductForm
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          currentSize={currentSize}
          currentColor={currentColor}
          colors={props.colors}
          clickHandler={clickHandler}
          sizes={props.sizes}
        />
      </div>
    </article>
  );
};

export default Product;
