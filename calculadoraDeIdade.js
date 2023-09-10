const anoAtual = new Date();
document.getElementById("anoAtual").innerHTML = "Ano atual: " + anoAtual.getFullYear();

function calculaIdade(){
    const anoNascimento = parseInt(document.getElementById('anoNascimento').value);
    const anoAtual = new Date().getFullYear();

    if (anoAtual>anoNascimento) {
        const calculo = anoAtual - anoNascimento;
        document.getElementById('resultadoCalculo').textContent = "Você tem " + calculo + " anos de idade."
    } else {
        alert('Por favor, insira números válidos.')
    }
}

const anoLog = new Date();
let aLog = anoLog.getFullYear();

function calculaIdadeLog(anoDeNacimentoLog,anoAtualLog){
    if (anoAtualLog>anoDeNacimentoLog){
        let calculoLog = anoAtualLog - anoDeNacimentoLog;
        return "Você tem " + calculoLog + " anos."
    } else {
        return "Por favor, insira números válidos.";
    } 
}

console.log(calculaIdadeLog(1984,2023));
console.log(calculaIdadeLog(2000,aLog));
console.log(calculaIdadeLog(2005,1990));
console.log(calculaIdadeLog(2003,aLog));