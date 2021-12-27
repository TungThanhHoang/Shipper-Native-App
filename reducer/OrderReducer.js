import { LOAD_ONE_ORDER, LOAD_ORDER } from "./store";

export const OrderReducer = (state, action) => {
  switch (action.type) {
    case LOAD_ORDER:
      return {
          ...state,
          orderBill:action.payload,
          isLoading:false
      };
    case LOAD_ONE_ORDER:
      return {
        ...state,
        oneBill: action.payload
      }
    default:
      return false;
  }
};
