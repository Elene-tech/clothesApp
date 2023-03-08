import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionColors from '../OptionColors/OptionColors';
import OptionSize from '../OptionSize/OptionSize';

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
      <OptionSize
        sizes={sizes}
        setCurrentSize={setCurrentSize}
        currentSize={currentSize}
      />
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
