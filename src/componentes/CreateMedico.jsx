import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Create() {
    const [medico, setMedico] = useState("");
    const [especialidad, setEspecialidad] = useState("");
    const [horario, setHorario] = useState("")


    const postData = () => {
        axios.post("http://localhost:3001/medicos", {
        medico,
        especialidad,
        horario
        });
    };

    return (
        <div>
        <Form className="create-form">
            <Form.Field>
            <label>Medico</label>
            <input
                placeholder="Nombre y Apellido"
                onChange={(e) => setMedico(e.target.value)}
            />
            </Form.Field>
            <Form.Field>
            <label>Especialidad</label>
            <input
                placeholder="Especialidad"
                onChange={(e) => setEspecialidad(e.target.value)}
            />
            </Form.Field>
            <Form.Field>
            <label>Horario</label>
            <input
                placeholder="Horario"
                onChange={(e) => setHorario(e.target.value)}
            />
            </Form.Field>
            <div className="btns">
            <Link to="/">
            <Button onClick={postData} type="submit">
            ➕
            </Button>
            <Button id="cancelar">
            ❌
            </Button>
            </Link>
            </div>
        </Form>
        </div>
    );
}
