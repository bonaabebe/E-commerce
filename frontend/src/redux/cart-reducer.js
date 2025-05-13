const initialState = {
    cart: [],
    totalPrice: 0,
    favorites: [],
    favoriteCount: 0,
  };
  
  export default function cartReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingItemIndexAdd = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
  
        if (existingItemIndexAdd >= 0) {
          const updatedCartAddExisting = state.cart.map((item, index) =>
            index === existingItemIndexAdd
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          );
          const updatedTotalAddExisting = updatedCartAddExisting.reduce(
            (total, item) => total + (item.price * (item.quantity || 1)),
            0
          );
          return {
            ...state,
            cart: updatedCartAddExisting,
            totalPrice: updatedTotalAddExisting,
          };
        } else {
          const updatedCartAddNew = [...state.cart, { ...action.payload, quantity: 1 }];
          const updatedTotalAddNew = updatedCartAddNew.reduce(
            (total, item) => total + item.price,
            0
          );
          return {
            ...state,
            cart: updatedCartAddNew,
            totalPrice: updatedTotalAddNew,
          };
        }
  
      case 'REMOVE_FROM_CART':
        const updatedCartRemove = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        const updatedTotalRemove = updatedCartRemove.reduce(
          (total, item) => total + (item.price * (item.quantity || 1)),
          0
        );
        return {
          ...state,
          cart: updatedCartRemove,
          totalPrice: updatedTotalRemove,
        };
  
      case 'INCREASE_QUANTITY':
        const updatedCartIncrease = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
        const updatedTotalIncrease = updatedCartIncrease.reduce(
          (total, item) => total + (item.price * item.quantity),
          0
        );
        return {
          ...state,
          cart: updatedCartIncrease,
          totalPrice: updatedTotalIncrease,
        };
  
      case 'DECREASE_QUANTITY':
        const updatedCartDecrease = state.cart.map((item) =>
          item.id === action.payload.id && (item.quantity || 1) > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        const updatedTotalDecrease = updatedCartDecrease.reduce(
          (total, item) => total + (item.price * item.quantity),
          0
        );
        return {
          ...state,
          cart: updatedCartDecrease,
          totalPrice: updatedTotalDecrease,
        };
  

        case 'LOAD_CART':
            // If the cart is loaded from localStorage, calculate the total price
            const cartFromStorage = action.payload;
            const totalPriceFromStorage = cartFromStorage.reduce(
              (total, item) => total + item.price,
              0
            );
            return {
              ...state,
              cart: cartFromStorage,
              totalPrice: totalPriceFromStorage,
            };
      
            case 'ADD_TO_FAVORITES':
              const updatedFavoritesAdd = [...state.favorites, action.payload];
              return {
                ...state,
                favorites: updatedFavoritesAdd,
                favoriteCount: updatedFavoritesAdd.length,
              };
               case 'REMOVE_FROM_FAVORITES':
            const updatedFavoritesRemove = state.favorites.filter(
              (item) => item.id !== action.payload.id
            );
            return {
              ...state,
              favorites: updatedFavoritesRemove,
              favoriteCount: updatedFavoritesRemove.length,
            };
      
          default:
            return state;
        }
      }
















