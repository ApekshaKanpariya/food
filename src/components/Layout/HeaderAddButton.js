import CartIcon from '../Cart/CartIcon';
import classes from './HeaderAddButton.module.css';

const HeaderAddButton = (props) => {

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Add Meals</span>
    </button>
  );
};

export default HeaderAddButton;