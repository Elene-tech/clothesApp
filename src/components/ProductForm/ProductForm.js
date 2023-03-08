import styles from './ProductForm.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';

const ProductForm = ({
  setCurrentSize,
  setCurrentColor,
  currentSize,
  currentColor,
  colors,
  clickHandler,
  sizes,
}) => {
  function prepareColorClassName(color) {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  }
  return (
    <form>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {sizes.map((size) => (
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
          {colors.map((item) => (
            <li key={item}>
              <Button
                type="button"
                onClick={() => {
                  setCurrentColor(item);
                }}
                className={clsx(
                  prepareColorClassName(item),
                  item === currentColor && styles.active
                )}
              />
            </li>
          ))}
        </ul>
      </div>
      <Button className={styles.button} onClick={clickHandler}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};
export default ProductForm;
