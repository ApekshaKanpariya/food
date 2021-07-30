import ModalAdd from '../UI/ModalAdd';
import classes from './AddCart.module.css';
import InputForm from './AddCartForm';

const AddCart = (props) => {

  return (
    <ModalAdd onClose={props.onClose}>

      <div className={classes.total}>
        <span>Add Meals</span>
      </div>
      <InputForm onClose={props.onClose}/>
      
    </ModalAdd>
  );
};

export default AddCart;