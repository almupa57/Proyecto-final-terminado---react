import React, { useState, useContext, useEffect } from "react";
import "../styles/calculadora.css";
import PresupuestoContext from "../context/presupuestoContext";

const Calculadora = () => {
  const [presupuesto, setPresupuesto] = useState({
    nombre: "",
    nit: "",
    direccion: "",
    tomas: "",
    luces: "",
    interruptores: "",
    tipo: "3",
    puTomas: "",
    puInterruptores: "",
    puLuces: "",
  });

  const presupuestoContext = useContext(PresupuestoContext);
  const { addPresupuesto, ticket } = presupuestoContext;

  const handleChange = (e) => {
    setPresupuesto({
      ...presupuesto,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (presupuesto.tipo === "social") {
      setPresupuesto({
        ...presupuesto,
        tomas: 12,
        luces: 6,
        interruptores: 6,
      });
    } else {
      setPresupuesto({
        ...presupuesto,
        tomas: "",
        luces: "",
        interruptores: "",
      });
    }
  }, [presupuesto.tipo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPresupuesto(presupuesto);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-title" id="cal">
          Ingresa algunos datos
        </h2>

        <label>Nombre de la empresa</label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={presupuesto.nombre}
          onChange={handleChange}
        />

        <label>Nit de la empresa</label>
        <input
          type="number"
          name="nit"
          placeholder="Nit"
          value={presupuesto.nit}
          onChange={handleChange}
        />

        <label> Direccion</label>
        <input
          type="text"
          name="direccion"
          placeholder="Direccion"
          value={presupuesto.direccion}
          onChange={handleChange}
        />

        <label>Elige un tipo de vivienda</label>
        <select name="tipo" value={presupuesto.tipo} onChange={handleChange}>
          <option value="3">Estrato 3</option>
          <option value="4">Estrato 4</option>
          <option value="social">Interes social</option>
        </select>

        <label>Tomas</label>
        <input
          type="number"
          name="tomas"
          placeholder="Numero de Tomas"
          value={presupuesto.tomas}
          onChange={handleChange}
        />

        <label>Luces</label>
        <input
          type="number"
          name="luces"
          placeholder="Numero de luces"
          value={presupuesto.luces}
          onChange={handleChange}
        />

        <label>Interruptores</label>
        <input
          type="number"
          name="interruptores"
          placeholder="Numero de interruptores "
          value={presupuesto.interruptores}
          onChange={handleChange}
        />

        <label>Precio unitario de tomas</label>
        <input
          type="number"
          name="puTomas"
          placeholder="Precio unitario"
          value={presupuesto.puTomas}
          onChange={handleChange}
        />

        <label>Precio unitario de luces</label>
        <input
          type="number"
          name="puLuces"
          placeholder="Precio unitario"
          value={presupuesto.puLuces}
          onChange={handleChange}
        />

        <label>Precio unitario de interruptores</label>
        <input
          type="number"
          name="puInterruptores"
          placeholder="Precio unitario"
          value={presupuesto.puInterruptores}
          onChange={handleChange}
        />

        <input className="btn" type="submit" value="Calcular Precio" />
      </form>

      <div className="recibo-container">
        <div className="recibo-header">
          <h2>Presupuesto</h2>
        </div>
        <div className="recibo-content">
          <h4>
            Nombre: <span>{ticket.nombreEmpresa}</span>
          </h4>
          <h4>
            Nit: <span>{ticket.nit}</span>
          </h4>
          <hr />
          <h4>
            Tomas: <span>{ticket.tomaCant}</span>
          </h4>
          <h4>
            Luces: <span>{ticket.cantidadLuces}</span>
          </h4>
          <h4>
            Interruptores: <span>{ticket.cantidadInterruptores}</span>
          </h4>
          <div className="total">
            <p>Total:</p>
            <h3>${ticket.total}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
