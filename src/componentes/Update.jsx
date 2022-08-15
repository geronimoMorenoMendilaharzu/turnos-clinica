    import React, { useEffect, useState } from 'react'
    import { Button, Form } from "semantic-ui-react"
    import axios from 'axios'
    import { Link } from "react-router-dom"
    import "../Style.css"

    function Update() {

    const [id, setID] = useState(null)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [fecha, setFecha] = useState("")
    const [doctor, setDoctor] = useState("")
    const [obraSocial, setObraSocial] = useState("")
    const [numAfiliado, setNumAfiliado] = useState("")

    useEffect(() => {
        setID(localStorage.getItem("ID"));
        setFirstName(localStorage.getItem("First Name"))
        setLastName(localStorage.getItem("Last Name"))
        setFecha(localStorage.getItem("Fecha"))
        setDoctor(localStorage.getItem("Doctor"))
        setObraSocial(localStorage.getItem("Obra Social"))
        setNumAfiliado(localStorage.getItem("Numero de Afiliado"))
    }, [])

    function updateAPIData(){
        axios.put(`http://localhost:3001/pacientes/${id}`, {
        firstName,
        lastName,
        fecha,
        doctor,
        obraSocial,
        numAfiliado
        })

    }

    return (
        <div>
        <Form className="create-form">
            <Form.Field>
            <label>First Name</label>
            <input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            </Form.Field>
            <Form.Field>
            <label>Last Name</label>
            <input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            </Form.Field>
            <Form.Field>
            <label>Fecha</label>
            <input
                type="datetime-local"
                data-date-format="DD MMMM YYYY"
                placeholder="Fecha"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
            />
            </Form.Field>
            <Form.Field>
            <label>Doctor</label>
            <input
                placeholder="Doctor"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
            />
            </Form.Field>
            <Form.Field>
            <label>Obra Social</label>
            <input
                placeholder="Obra Social"
                value={obraSocial}
                onChange={(e) => setObraSocial(e.target.value)}
            />
            </Form.Field>
            <Form.Field>
            <label>N° de Afiliado</label>
            <input
                placeholder="N° de Afiliado"
                value={numAfiliado}
                onChange={(e) => setNumAfiliado(e.target.value)}
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