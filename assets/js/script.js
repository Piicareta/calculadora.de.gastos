
let base = 1

function calcularValor() {

    let potencia = document.getElementById('potencia').value
    potencia = potencia.replace('e', '')
    let preco = (0.75*100)/100
    let gasto = Math.abs(potencia/1000)*preco
    
    let resultado = gasto*base
    resultado = resultado.toFixed(2)
    
    let semana = resultado*7
    semana = semana.toFixed(2)
    
    let mes = resultado*30
    mes = mes.toFixed(2)

    
    document.getElementById('hora').innerHTML = `${resultado.replace('.', ',')} R$`
    document.getElementById('semana').innerHTML = `${semana.replace('.', ',')} R$`
    document.getElementById('mes').innerHTML = `${mes.replace('.', ',')} R$`

    document.getElementById('botao').classList.add('ligado')
    document.getElementById('gastos').classList.add('show')
}

document.getElementById('mais').onclick = function () {

    base += 1
    document.getElementById('horas').innerHTML = ` ${base} `
    calcularValor()
}

document.getElementById('menos').onclick = function () {

    base -= 1
    document.getElementById('horas').innerHTML = ` ${base} `
    calcularValor()
}