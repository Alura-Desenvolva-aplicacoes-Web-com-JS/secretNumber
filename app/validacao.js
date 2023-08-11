function validaChute(chute){
    const numero = +chute

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }
    if(numeroNaoPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: O número precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Parabéns!!! Você acertou o número secreto <span>(que agora não é mais secreto)</span></h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroNaoPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})