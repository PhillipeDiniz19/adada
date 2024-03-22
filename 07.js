// Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
// • O maior preço lido; e
// • A média aritmética dos preços dos produtos.



const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/exercicio7', (req, res) => {
    const produtos = req.body.produtos;
    

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
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

// tabela de produtos usada no post
// {
//     "produtos": [
//       {"codigo": "001", "preco": 10},
//       {"codigo": "002", "preco": 15},
//       {"codigo": "003", "preco": 20},
//       {"codigo": "004", "preco": 25},
//       {"codigo": "005", "preco": 30},
//       {"codigo": "006", "preco": 35},
//       {"codigo": "007", "preco": 40},
//       {"codigo": "008", "preco": 45},
//       {"codigo": "009", "preco": 50},
//       {"codigo": "010", "preco": 55},
//       {"codigo": "011", "preco": 60},
//       {"codigo": "012", "preco": 65},
//       {"codigo": "013", "preco": 70},
//       {"codigo": "014", "preco": 75},
//       {"codigo": "015", "preco": 80}
//     ]
//   }
  