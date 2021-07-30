import { useState , useEffect } from 'react';

import Login from './components/Login/Login';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import AddCart from './components/Cart/AddCart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [addCartIsShown, setAddCartIsShown] = useState(false);
  const [logInOut, setLogInOut] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("login") === "true"){
      setLogInOut(true);
    }
    else{
      setLogInOut(false);
    }
    
  }, []);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const onShowAddCart = () => {
    setAddCartIsShown(true);
  };

  const hideAddCartHandler = () => {
    setAddCartIsShown(false);
  };

  const LogOut = () =>{
    localStorage.removeItem("login");
    setLogInOut(false);
  }

  const LogIn = () =>{
    localStorage.setItem("login", true);
    setLogInOut(true);
  }

  return (
    <CartProvider>
  
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {addCartIsShown && <AddCart onClose={hideAddCartHandler}/>}
      <Header onShowCart={showCartHandler} logout={logInOut} onShowAddCart={onShowAddCart} LogOut={LogOut} />
      <main>
        {!logInOut && <Login LogIn={LogIn} />}
        {logInOut && <Meals />}
      </main>
    </CartProvider>
  );
}

export default App;