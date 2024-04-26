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
})

const elemStop = document.querySelector('.close')
const elemPlay = document.querySelector('.play')
const elemPause = document.querySelector('.pause')
const elemCronometro = document.querySelector('.cronometro')

elemPlay.addEventListener('click', () => {
    elemCronometro.classList.add('iniciou')
})

elemStop.addEventListener('click', () => {
    elemCronometro.classList.remove('iniciou')
})

elemPause.addEventListener('click', () => {
    elemCronometro.classList.remove('iniciou')
})