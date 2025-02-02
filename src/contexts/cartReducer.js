export const CartReducer = (state, action) => { 
  debugger;

  let index = -1;
  
  if (action.payLoad)
  index = state.cartItems.findIndex(x => x.id === action.payload.id);
  switch (action.type) {
    case "ADD":

    if (index === -1) {
      state.cartItems.push({...action.payLoad, quantity: 1 });
    }
    else {
      state.cartItems[index].quantity++;
    }
    break;

    case "REMOVE":
      if (index > -1){
        state.cartItems.splice(index, 1);
      }
      break;

    case "DECQTY":
      if(index > -1){
        state.cartItems[index].quantity--;
      }
      break;

    case "CLEAR":
      state.cartItems = [];
      break;
    
    default:
  }
  return state
}