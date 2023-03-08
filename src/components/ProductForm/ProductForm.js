import styles from './ProductForm.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import OptionColors from '../OptionColors/OptionColors';

const ProductForm = ({
  setCurrentSize,
  setCurrentColor,
  currentSize,
  currentColor,
  colors,
  clickHandler,
  sizes,
}) => {
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
      <OptionColors
        colors={colors}
        setCurrentColor={setCurrentColor}
        currentColor={currentColor}
      />
      <Button className={styles.button} onClick={clickHandler}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};
export default ProductForm;
