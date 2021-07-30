import React, { useReducer } from 'react';

import classes from './Login.module.css';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
      return { value: action.val, isValid: action.val.includes('@') };
    }
    return { value: '', isValid: false };
};
  
const passwordReducer = (state, action) => {
    if (action.type === 'USER_PASS') {
      return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    return { value: '', isValid: false };
};

const Login = (props) =>{

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null,
    });

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
    };
    
    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: 'USER_PASS', val: event.target.value });
    };

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    const SubmitForm = () => {
        if(!emailIsValid){
            toast.dark('Check Your Email', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else if(!passwordIsValid){
            toast.dark('Check Your Password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else{
            props.LogIn();
        }
        
    }

    return(
        <div className={classes.login}>
            <div className={classes.form}>
        <div className={classes.input}>
            <label>Email</label>
            <input type="email" value={emailState.value} onChange={emailChangeHandler} />
        </div>

        <div className={classes.input}>
            <label>Password</label>
            <input type="text" value={passwordState.value} onChange={passwordChangeHandler} />
        </div>
          <button className={classes.button} onClick={SubmitForm}>LOgIn</button>
          
            <ToastContainer />
      </div>
            
        </div>
    );
}

export default Login;