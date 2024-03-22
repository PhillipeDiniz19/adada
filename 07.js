// Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
// • O maior preço lido; e
// • A média aritmética dos preços dos produtos.



const express = require('express')
const app = express()
const port = 3001

app.post('/calcular-precos', (req, res) => {
    const produtos = req.body.produtos

    let maiorPreco = Number.MIN_VALUE;
    let somaPrecos = 0;

    for (const produto of produtos) {
        const preco = parseFloat(produto.preco);
        somaPrecos += preco;

        if (preco > maiorPreco) {
            maiorPreco = preco;
        }
    }

    const mediaPrecos = somaPrecos / produtos.length;

    res.json({ maiorPreco, mediaPrecos });
    console.log(produtos)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
