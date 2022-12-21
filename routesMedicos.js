const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query(`select * from medicos;`, (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO medicos set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.send('medico agregado')
        })
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM medicos WHERE idMedico = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('medico borrado')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE medicos set ? WHERE idMedico = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('paciente modificado')
        })
    })
})

module.exports = routes