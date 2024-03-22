// Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. Fórmulas para cálculo do peso:
//     • peso ideal de homem = (72,7 x altura) – 58
//     • peso ideal da mulher = (62,1 x altura) – 44,7



const express = require('express')
const app = express()
const port = 3001

app.get('/exercicio6/:altura/:sexo', (req, res) => {
    const sexo = req.params.sexo.toLowerCase()
    const altura = parseFloat(req.params.altura)
    let pesoIdeal;

    if (sexo.toLowerCase() === 'masculino') {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo.toLowerCase() === 'feminino') {
        pesoIdeal = (62.1 * altura) - 44.7;
    } else {
        return res.status(400).json({ error: "Sexo inválido. Por favor, insira 'masculino' ou 'feminino'. OU passe a altera como ex:(1.90) "  });
    }

    res.json({ pesoIdeal });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
