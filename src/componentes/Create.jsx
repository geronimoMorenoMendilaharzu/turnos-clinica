    import React, { useState } from "react";
    import { Button, Checkbox, Form } from "semantic-ui-react";
    import axios from "axios";
    import { Link } from "react-router-dom";
    import "../Style.css"


    export default function Create() {
        
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fecha, setFecha] = useState("")
    const [doctor, setDoctor] = useState("")
    const [obraSocial, setObraSocial] = useState("")
    const [numAfiliado, setNumAfiliado] = useState("")


    const postData = () => {
        axios.post("http://localhost:3001/pacientes", {
        firstName,
        lastName,
        fecha,
        doctor,
        obraSocial,
        numAfiliado
        });
    };

    return (
        <div>
        <Form className="create-form">
            <Form.Field>
            <label>First Name</label>
            <input
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
            />
            </Form.Field>
            <Form.Field>
            <label>Last Name</label>
            <input
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
            />
            </Form.Field>
            <Form.Field>
            <label>Fecha</label>
            <input type="datetime-local"
                data-date-format="DD MM"
                placeholder="fecha"
                onChange={(e) => setFecha(e.target.value)}
            />
            </Form.Field>
            <Form.Field>
            <label>Medico</label>
            <input
                placeholder="Doctor"
                onChange={(e) => setDoctor(e.target.value)}
            />
            </Form.Field>
            <Form.Field>
            <label>Obra Social</label>
            <input
                placeholder="Obra Social"
                onChange={(e) => setObraSocial(e.target.value)}
            />
            </Form.Field>
            <Form.Field>
            <label>N° de Afiliado</label>
            <input
                placeholder="N° de Afiliado"
                onChange={(e) => setNumAfiliado(e.target.value)}
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
