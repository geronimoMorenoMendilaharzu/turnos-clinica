import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Button} from "semantic-ui-react"

function Read() {
  const [APIData, setAPIData] = useState([]);
  const [apiMedicos, setApiMedicos] = useState([]);
//useEffect de medicos
  useEffect(() => {
    axios.get("http://localhost:3001/medicos").then((resp) => {
      setApiMedicos(resp.data);
    });
  }, []);
//useEffect de pacientes
  useEffect(() => {
    axios.get("http://localhost:3001/pacientes").then((resp) => {
      setAPIData(resp.data);
    });
  }, []);

  function setData(data){
    let {id, firstName, lastName, fecha, doctor, obraSocial, numAfiliado} = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Fecha", fecha);
    localStorage.setItem("Doctor", doctor);
    localStorage.setItem("Obra Social", obraSocial);
    localStorage.setItem("Numero de Afiliado", numAfiliado);
  }

  function setData1(data){
    let {id, medico, especialidad, horario} = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Medico", medico);
    localStorage.setItem("Especialidad", especialidad);
    localStorage.setItem("Horario", horario);
  }
//funciones de pacientes
  function onDelete(id) { 
    axios.delete(`http://localhost:3001/pacientes/${id}`).then(() => { 
      getData();
    })
  }
  function getData() { 
      axios.get("http://localhost:3001/pacientes").then((resp) => {
        setAPIData(resp.data);
      });
  }
//funciones de medicos
  function onDelete1(id) { 
    axios.delete(`http://localhost:3001/medicos/${id}`).then(() => { 
      getData1();
    })
  }
  function getData1() { 
    axios.get("http://localhost:3001/medicos").then((resp) => {
      setApiMedicos(resp.data);
    });
  }

  return (
    <>
      <Link to="/create">
        <Button id="btnAgregar">Agregar Paciente</Button>
      </Link>

      <table>
          <tr id="cabecera">
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Turno</td>
            <td>Medico</td>
            <td>Obra Social</td>
            <td>N° de Afiliado</td>
            <td></td>
          </tr>
        {APIData.map((elem) => (
          <tr>
            <td>{elem.firstName}</td>
            <td>{elem.lastName}</td>
            <td>{elem.fecha}</td>
            <td>{elem.doctor}</td>
            <td>{elem.obraSocial}</td>
            <td>{elem.numAfiliado}</td>
            <td>
              <Link to="/update">
                <Button onClick={() => setData(elem)}>✏️</Button>
              </Link>
              <Button id="tachito" onClick={() => onDelete(elem.id)}>🗑️</Button>
            </td>
          </tr>
        ))}
      </table>
      <Link to="/createMedico">
        <Button id="btnAgregar">Agragar Medico</Button>
      </Link>
      <table>
      <tr id="cabecera">
            <td>Medico</td>
            <td>Especialidad</td>
            <td>Horarios</td>
            <td></td>
          </tr>
        {apiMedicos.map((el)=>(
          <tr>
            <td>{el.medico}</td>
            <td>{el.especialidad}</td>
            <td>{el.horario}</td>
            <td>
              <Link to="/updateMedico">
                <Button onClick={() => setData1(el)}>✏️</Button>
              </Link>
              <Button id="tachito" onClick={() => onDelete1(el.id)}>🗑️</Button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Read;