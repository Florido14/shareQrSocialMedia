import React, { Fragment, useState } from "react";

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target.name);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    alert("enviando datos..." + datos.nombre);
  };

  return (
    <Fragment>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Ej= https//:facebook.com/hvuir484"
            className="form-control"
            onChange={handleInputChange}
            name="nombre"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <ul>
        <li>{datos.nombre}</li>
      </ul>
    </Fragment>
  );
};

export default Formulario;
