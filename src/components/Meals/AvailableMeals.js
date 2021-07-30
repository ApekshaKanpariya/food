import { useContext} from 'react';

import Card from '../UI/Card';
import MealItem from './MealIteam/MealIteam';
import classes from './AvailableMeals.module.css';
import CartContext from '../../store/cart-context';

const AvailableMeals = () => {

  const cartCtx = useContext(CartContext);

  const mealsList = cartCtx.mealItems.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;