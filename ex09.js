const express = require('express');
const app = express();
const port = 3001;

app.get('/exercicio9/:salarioMinimo/:horasTrabalhadas/:dependentes/:horasExtras', (req, res) => {
    const salarioMinimo = Number(req.params.salarioMinimo);
    const horasTrabalhadas = Number(req.params.horasTrabalhadas);
    const dependentes = Number(req.params.dependentes);
    const horasExtras = Number(req.params.horasExtras);
    
    const valorHoraTrabalhada = salarioMinimo / 5;
    const salarioMes = horasTrabalhadas * valorHoraTrabalhada;
    const acrescimoDependentes = dependentes * 32;
    const valorHoraExtra = valorHoraTrabalhada * 1.5;
    const salarioBruto = salarioMes + acrescimoDependentes + (horasExtras * valorHoraExtra);

    let irrf;
    if (salarioBruto <= 2000) {
        irrf = 0;
    } else if (salarioBruto <= 5000) {
        irrf = salarioBruto * 0.1;
    } else {
        irrf = salarioBruto * 0.2;
    }

    const salarioLiquido = salarioBruto - irrf;
    const gratificacao = salarioLiquido <= 3500 ? 1000 : 500;
    const salarioReceber = salarioLiquido + gratificacao;

    res.json({
        salarioMes,
        acrescimoDependentes,
        horasExtras,
        salarioBruto,
        irrf,
        salarioLiquido,
        gratificacao,
        salarioReceber
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
