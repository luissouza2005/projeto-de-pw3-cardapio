const express = require('express');

const router = express.Router();

const modelingrediente = require('../model/ingredienteModel');

router.get('/getingrediente', (req, res)=>{

   console.log('TESTE DE ROTA GET');
   res.send('TESTE DE ROTA GET');
});

router.post('/postingrediente', (req, res)=>{
    console.log('TESTE DE ROTA POST');
    res.send('TESTE DE ROTA POST');
});

router.put('/putingrediente', (req, res)=>{

    console.log('TESTE DE ROTA PUT');
    res.send('TESTE DE ROTA PUT');
});

router.delete('/deleteingrediente', (req, res)=>{

    console.log('TESTE DE ROTA DELETE');
    res.send('TESTE DE ROTA DELETE ');
});

module.exports = router;