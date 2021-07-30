import CartIcon from '../Cart/CartIcon';
import classes from './HeaderLogOutButton.module.css';

const HeaderLogOutButton = (props) => {

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>LogOut</span>
    </button>
  );
};

export default HeaderLogOutButton;