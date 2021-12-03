import React, { useState, useContext } from "react";
import "../styles/resultado.css";
import PresupuestoContext from "../context/presupuestoContext";

const Resultado = () => {
  const [search, setSearch] = useState("");

  const presupuestoContext = useContext(PresupuestoContext);
  const { searchPresupuesto, presupuestos } = presupuestoContext;

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchPresupuesto(search);
  };

  return (
    <div className="containerResultado">
      <form className="form-resultado" onSubmit={handleSubmit}>
        <h2 className="buscar-title">
          Busca presupuestos con el nit de tu empresa
        </h2>
        <input
          type="number"
          name="nit"
          placeholder="Nit "
          value={search}
          className="input-resultado"
          onChange={handleChange}
        />
        <input
          className="btn-resultado"
          type="submit"
          value="Buscar presupuesto"
        />
      </form>
      <hr className="hr-resultado" />

      {presupuestos ? (
        presupuestos.map((presupuesto) => (
          <div className="resultado">
            <h5>Nombre: {presupuesto.nombreEmpresa}</h5>
            <h5>{`Tomas: ${presupuesto.tomaCant} ------------------- ${
              presupuesto.puToma * presupuesto.tomaCant
            }$ `}</h5>
            <h5>{`Luces: ${presupuesto.cantidadLuces} ------------------- ${
              presupuesto.puLuces * presupuesto.cantidadLuces
            }$ `}</h5>
            <h5>{`Interruptores: ${
              presupuesto.cantidadInterruptores
            } ----------- ${
              presupuesto.puInterruptores * presupuesto.cantidadInterruptores
            }$ `}</h5>
            <h5>Total: {presupuesto.total}</h5>
          </div>
        ))
      ) : (
        <h5>"Sorry, no encontramos tu nit"</h5>
      )}
    </div>
  );
};

export default Resultado;
