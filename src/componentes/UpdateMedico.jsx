import React, { useEffect, useState } from 'react'
import { Button, Form } from "semantic-ui-react"
import axios from 'axios'
import { Link } from "react-router-dom"
import "../Style.css"

function Update() {

const [id, setID] = useState(null)
const [medico, setMedico] = useState("")
const [especialidad, setEspecialidad] = useState("")
const [horario, setHorario] = useState("")


useEffect(() => {
    setID(localStorage.getItem("ID"));
    setMedico(localStorage.getItem("Medico"))
    setEspecialidad(localStorage.getItem("Especialidad"))
    setHorario(localStorage.getItem("Horario"))
}, [])

function updateAPIData(){
    axios.put(`http://localhost:3001/medicos/${id}`, {
    medico,
    especialidad,
    horario,
    })
}

return (
    <div>
    <Form className="create-form">
        <Form.Field>
        <label>Medico</label>
        <input
            placeholder="Nombre y Apellido"
            value={medico}
            onChange={(e) => setMedico(e.target.value)}
        />
        </Form.Field>
        <Form.Field>
        <label>Especialidad</label>
        <input
            placeholder="Especialidad"
            value={especialidad}
            onChange={(e) => setEspecialidad(e.target.value)}
        />
        </Form.Field>
        <Form.Field>
        <label>Horario</label>
        <input
            placeholder="Horario"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
        />
        </Form.Field>
        <div className="btns">
        <Link to="/">
        <Button onClick={updateAPIData} type="submit">
        ➕
        </Button>
        <Button>❌</Button>
        </Link>
        </div>
    </Form>
    </div>
);
}

export default Update