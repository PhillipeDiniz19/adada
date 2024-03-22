// Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:

// • Salários até 2.000, reajuste de 50%
// • Salários maiores que 2.000, reajuste de 30%


const express = require('express');
const app = express();
const port = 3001;

app.get('/exercicio5/:salario', (req, res) => {
    const salario = Number(req.params.salario); 
    let salarioFinal; 

    
    if (salario <= 2000) {
        salarioFinal = salario + (salario * 0.5); 
    } else {
        salarioFinal = salario + (salario * 0.3); 
    }

    if (isNaN(salario)) {
        return res.status(400).json({ error: 'Por favor, forneça valores numéricos válidos.' });
    }

    
    res.send(`Salário reajustado: ${salarioFinal}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
