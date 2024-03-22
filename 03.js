/*Escrever uma api que lê o nome de um vendedor, 
o seu salário fixo, o total de vendas por ele efetuadas e o percentual 
que ganha sobre o total de vendas. Calcular o salário total do vendedor. 
Escrever o nome do vendedor e seu salário total.
*/



const express = require('express')
const app = express()
const port = 3001

app.get('/exercicio3/:nome/:salario/:totalVendas/:percentual', (req, res) => {
    const nome = (req.params.nome)
    const salario = Number(req.params.salario)
    const totalVendas = Number(req.params.totalVendas)
    const percentual = Number(req.params.percentual)
    const salárioFinal = salario + (totalVendas * (percentual/100))

    if (isNaN(nome) || isNaN(salario) || isNaN(totalVendas) || isNaN(percentual)) {
      return res.status(400).json({ error: 'Por favor, forneça valores válidos.' });
  }

    res.send(`Seu nome: ${nome} <br/>
              Seu salário final: ${salárioFinal} `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})