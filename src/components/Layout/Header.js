import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import HeaderAddButton from './HeaderAddButton';
import HeaderLogOutButton from './HeaderLogOutButton';
import mealsImage from '../../assests/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        {props.logout && <HeaderAddButton onClick={props.onShowAddCart} />}
        {props.logout && <HeaderCartButton onClick={props.onShowCart} />}
        {props.logout && <HeaderLogOutButton onClick={props.LogOut}/>}
      </header>
      {props.logout && <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>}
    </Fragment>
  );
};

export default Header;