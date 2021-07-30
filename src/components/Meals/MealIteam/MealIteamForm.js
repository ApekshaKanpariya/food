import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealIteamForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = () => {

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  const removeHandler = () => {
    props.removeMeal();
  }

  return (
    <div className={classes.form}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button onClick={submitHandler}>+ Add</button>
      <div className={classes.remove}>
      <button onClick={removeHandler}>- Remove</button>
      </div>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </div>
  );
};

export default MealItemForm;