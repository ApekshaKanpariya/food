import React from 'react';

const CartContext = React.createContext({
  mealItems: [],
  addMeal: (item) => {},
  removeMeal: (id) => {},
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default CartContext;