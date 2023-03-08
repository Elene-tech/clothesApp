import styles from './OptionSize.module.scss';
import Button from '../Button/Button';
import clsx from 'clsx';

const OptionSize = ({ sizes, setCurrentSize, currentSize }) => {
  return (
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
  );
};
export default OptionSize;
