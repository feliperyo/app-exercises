const elemsExercicio = document.querySelectorAll('.exercicio')
const elemTela = document.querySelector('.tela')
const elemVoltar = document.querySelector('.voltar')

elemsExercicio.forEach((elemExercicio) => {
    elemExercicio.addEventListener('click', () => {
        elemTela.classList.add('tela--cronometro')
    })
})

elemVoltar.addEventListener('click', () => {
    elemTela.classList.remove('tela--cronometro')
    clicouStop()
})

const elemStop = document.querySelector('.close')
const elemPlay = document.querySelector('.play')
const elemPause = document.querySelector('.pause')
const elemCronometro = document.querySelector('.cronometro')

let timer = 0
let idIntervalo

function clickPlay() {
    elemCronometro.classList.add('iniciou')

    rodarTimer()
}

elemPlay.addEventListener('click', clickPlay)

function clicouStop() {
    elemCronometro.classList.remove('iniciou')

    clearInterval(idIntervalo)
    timer = 0
    attCronometro()
}

elemStop.addEventListener('click', clicouStop)

function clicouPause() {
    elemCronometro.classList.remove('iniciou')

    clearInterval(idIntervalo)
}

elemPause.addEventListener('click', clicouPause)

const elemHorario = document.querySelector('.horario')

function attHorario() {
    const horas = new Date().getHours().toString().padStart(2, '0')
    const minutos = new Date().getMinutes().toString().padStart(2, '0')

    elemHorario.innerText = horas + ':' + minutos
}

setInterval(() => {
    attHorario()
}, 1000);

function rodarTimer() {
    idIntervalo = setInterval(() => {
        timer = timer + 10
        attCronometro()
    }, 10);
}

const elemMinuto = document.querySelector('.minuto')
const elemSegundo = document.querySelector('.segundo')
const elemCentesimo = document.querySelector('.centesimo')

function attCronometro() {
    const minutos = Math.floor(timer / 60000).toString().padStart(2, '0')
    const segundos = Math.floor((timer % 60000) / 1000).toString().padStart(2, '0')
    const centesimos = Math.floor(((timer % 60000) % 1000) / 10).toString().padStart(2, '0')

    elemMinuto.innerHTML = minutos
    elemSegundo.innerHTML = segundos
    elemCentesimo.innerHTML = centesimos
}