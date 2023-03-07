import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
//import PropTypes from 'prop-types';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = () => {
    const foundSize = props.sizes.find(
      (element) => element.name === currentSize
    );
    return props.basePrice + foundSize.additionalPrice;
  };

  function prepareColorClassName(color) {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  }

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
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => (
                <li key={size.name}>
                  <Button
                    type="button"
                    onClick={() => {
                      setCurrentSize(size.name);
                    }}
                    className={clsx(size.name === currentSize && styles.active)}
                  >
                    {size.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((item) => (
                <li key={item}>
                  <Button
                    type="button"
                    onClick={() => {
                      setCurrentColor(item);
                    }}
                    className={clsx(
                      prepareColorClassName(item),
                      item === props.currentColor && styles.active
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  );
};

export default Product;
