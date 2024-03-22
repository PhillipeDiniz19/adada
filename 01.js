// 1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.


const express = require('express')
const app = express()
const port = 3001

app.get('/exercicio1/:qtdMinima/:qtdMaxima', (req, res) => {
    const quantidadeMinima = Number(req.params.qtdMinima)
    const quantidadeMaxima = Number(req.params.qtdMaxima)

    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2

    
    if (isNaN(qtdMinima) || isNaN(qtdMaxima)) {
      return res.status(400).json({ error: 'Por favor, forneça valores válidos.' });
  }

    res.send(`Estoque Médio: ${estoqueMedio}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})