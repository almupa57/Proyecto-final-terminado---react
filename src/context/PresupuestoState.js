import React, { useReducer } from "react";
import presupuestoContext from "./presupuestoContext";
import presupuestoReducer from "./presupuestoReducer";
import { ADD_PRESUPUESTO, SEARCH_PRESUPUESTO } from "../types";
import axios from "axios";

const PresupuestoState = (props) => {
  const initialState = {
    ticket: {
      nombreEmpresa: "",
      nit: null,
      direccion: "",
      tomaCant: null,
      cantidadLuces: null,
      cantidadInterruptores: null,
      total: null,
    },
    presupuestos: [],
  };

  const [state, dispatch] = useReducer(presupuestoReducer, initialState);

  const addPresupuesto = async (data) => {
    const url = "https://presupuesto-api.herokuapp.com/presupuesto";

    try {
      const response = await axios.post(url, {
        nombreEmpresa: data.nombre,
        nit: data.nit,
        tomaCant: data.tomas,
        puToma: data.puTomas,
        cantidadLuces: data.luces,
        puLuces: data.puLuces,
        puInterruptores: data.puInterruptores,
        cantidadInterruptores: data.interruptores,
        tipoVivienda: data.tipo,
      });

      dispatch({
        type: ADD_PRESUPUESTO,
        payload: response.data.presupuesto,
      });

      console.log(response.data.presupuesto);
    } catch (error) {
      console.log(error);
    }
  };

  const searchPresupuesto = async (nit) => {
    const url = `https://presupuesto-api.herokuapp.com/presupuesto/${nit}`;

    try {
      const response = await axios.get(url, {
        nit: nit,
      });

      dispatch({
        type: SEARCH_PRESUPUESTO,
        payload: response.data.presupuestos,
      });

      console.log(response.data.presupuestos);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <presupuestoContext.Provider
      value={{
        ticket: state.ticket,
        presupuestos: state.presupuestos,
        addPresupuesto,
        searchPresupuesto,
      }}
    >
      {props.children}
    </presupuestoContext.Provider>
  );
};

export default PresupuestoState;
