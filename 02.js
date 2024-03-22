// Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. 
// Escreva uma api que receba o salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem 
// caso o funcionário não tenha direito ao aumento.



const express = require('express')
const app = express()
const port = 3001

app.get('/exercicio2/:salario', (req, res) => {
    const salario = Number(req.params.salario)

    if(salario <= 1000) {
        salarioFinal = salario + (salario * 0.30)
    }else {
        salarioFinal = "Seu salario é maior que 1000R$ então não tem direito."
    }

    if (isNaN(salario)) {
        return res.status(400).json({ error: 'Por favor, forneça valores válidos.' });
    }

    res.send(`Salario: ${salarioFinal}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})