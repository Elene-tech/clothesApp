import styles from './OptionColors.module.scss';
import Button from '../Button/Button';
import clsx from 'clsx';

const OptionColors = ({ colors, setCurrentColor, currentColor }) => {
  function prepareColorClassName(color) {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  }
  return (
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
  );
};
export default OptionColors;
