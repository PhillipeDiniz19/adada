const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.get('/exercicio8/:salario/:codigoCargo', (req, res) => {
    const salario = parseFloat(req.params.salario);
    const codigoCargo = parseInt(req.params.codigoCargo);
    let salarioFinal;

    if (isNaN(salario) || isNaN(codigoCargo)) {
        return res.status(400).json({ error: 'Por favor, forneça valores numéricos válidos.' });
    } else if (codigoCargo === 101) {
        salarioFinal = salario + (salario * 0.05);
    } else if (codigoCargo === 102) {
        salarioFinal = salario + (salario * 0.075);
    } else if (codigoCargo === 103) {
        salarioFinal = salario + (salario * 0.1);
    } else {
        salarioFinal = salario + (salario * 0.15);
    }

    const diferenca = salarioFinal - salario;

    res.json({
        salarioAntigo: salario,
        novoSalario: salarioFinal,
        diferenca: diferenca
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
