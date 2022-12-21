const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query(`select p.idPaciente, p.nombre, p.fecha, date_format(fecha, "%d/%m/%y %k:%i") as "fecha", p.obraSocial, p.numeroAfiliado, m.nombre as "medico",m.idMedico from pacientes as p, medicos as m where p.idMedico = m.idMedico`, (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})


// routes.get('/:id', (req, res)=>{
//     req.getConnection((err, conn)=>{
//         if(err) return res.send(err)

//         conn.query(`select * from pacientes where idPaciente = ?`, [req.params.id], (err, rows)=>{
//             if(err) return res.send(err)
//             res.json(rows)
//         })
//     })
// })

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO pacientes set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.send('paciente agregado')
        })
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM pacientes WHERE idPaciente = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send("paciente borrado")
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE pacientes set ? WHERE idPaciente = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('paciente modificado')
        })
    })
})

module.exports = routes