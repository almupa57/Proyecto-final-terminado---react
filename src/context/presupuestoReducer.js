import { ADD_PRESUPUESTO, SEARCH_PRESUPUESTO } from "../types";

const presupuestoReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRESUPUESTO:
      return {
        ...state,
        ticket: action.payload,
      };

    case SEARCH_PRESUPUESTO:
      return {
        ...state,
        presupuestos: action.payload,
      };
    default:
      return state;
  }
};

export default presupuestoReducer;
