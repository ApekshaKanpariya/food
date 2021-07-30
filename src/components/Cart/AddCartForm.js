import { useState, useReducer, useContext, useEffect} from "react";

import classes from './AddCartForm.module.css';
import CartContext from '../../store/cart-context';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const nameReducer = (state, action) => {
  if (action.type === 'NAME_INPUT') {
    return { value: action.val, isValid: action.val.trim().length != 0 };
  }
  return { value: '', isValid: false };
};

const descriptionReducer = (state, action) => {
  if (action.type === 'DESCRIPTION_INPUT') {
    return { value: action.val, isValid: action.val.trim().length != 0 };
  }
  return { value: '', isValid: false };
};

const priceReducer = (state, action) => {
  if (action.type === 'PRICE_INPUT') {
    return { value: action.val, isValid: action.val.trim().length != 0 };
  }
  return { value: '', isValid: false };
};

const InputForm = (props) =>{

  const cartCtx = useContext(CartContext);

  const [fromValid , setFromValid] = useState(false);

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: '',
    isValid: null,
  });
  
  const [descriptionState, dispatchDescription] = useReducer(descriptionReducer, {
    value: '',
    isValid: null,
  });

  const [priceState, dispatchPrice] = useReducer(priceReducer, {
    value: '',
    isValid: null,
  });
  
  const nameChangeHandler = (event) => {
    dispatchName({ type: 'NAME_INPUT', val: event.target.value });
  };
  
  const descriptionChangeHandler = (event) => {
    dispatchDescription({ type: 'DESCRIPTION_INPUT', val: event.target.value });
  };

  const priceChangeHandler = (event) => {
    dispatchPrice({ type: 'PRICE_INPUT', val: event.target.value });
  };
  
  const { isValid: nameIsValid } = nameState;
  const { isValid: descriptionIsValid } = descriptionState;
  const { isValid: priceIsValid } = priceState;
  
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFromValid(nameIsValid && descriptionIsValid && priceIsValid);
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [nameIsValid, descriptionIsValid, priceIsValid]);
  
  const SubmitForm = () => {
    if(!fromValid){
        toast.dark('Fill All Fields', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }else{
      const MealsData = {
        id: Math.random().toString(),
        name: nameState.value,
        description: descriptionState.value,
        price: +priceState.name
      };
      cartCtx.addMeal(MealsData);
      props.onClose();
    }  
  }

    return(
      <div className={classes.form}>
        <div className={classes.input}>
            <label>Name</label>
            <input type="text" name="name" onChange={nameChangeHandler}/>
        </div>

        <div className={classes.input}>
            <label>Description</label>
            <input type="text" name="description" onChange={descriptionChangeHandler} />
        </div>

        <div className={classes.input}>
            <label>Price</label>
            <input type="number" name="price" onChange={priceChangeHandler}/>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          <button className={classes.button} onClick={SubmitForm}>Add</button>
        </div>
      <ToastContainer />

      </div>
    )
}

export default InputForm;