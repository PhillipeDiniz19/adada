/*Faça uma api que leia o nome de um piloto, 
uma distância percorrida em km e o tempo que o piloto levou para percorrê-la (em horas). 
O programa deve calcular a 
velocidade média - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte frase: 
A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h.
*/



const express = require('express')
const app = express()
const port = 3001

app.get('/exercicio4/:nomePiloto/:distanciaPercorrida/:tempo', (req, res) => {
    const nomePiloto = (req.params.nomePiloto)
    const distanciaPercorrida = Number(req.params.distanciaPercorrida)
    const tempo = Number(req.params.tempo)
 
    const velocidadeMedia = distanciaPercorrida / tempo

    if (isNaN(nomePiloto) || isNaN(distanciaPercorrida) || isNaN(tempo)) {
        return res.status(400).json({ error: 'Por favor, forneça valores numéricos válidos.' });
    }

    res.send(`A velocidade média do ${nomePiloto} <br/>
              foi ${velocidadeMedia} km/h `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})