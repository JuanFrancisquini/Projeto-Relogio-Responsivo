setInterval(sethour, 1000)

const minutos = document.querySelector('div#minutos')
const segundos = document.querySelector('div#seg')
const hr = document.querySelector('div#hora')

function sethour(){
    const currentDate = new Date();
    const seg = ('0' + currentDate.getSeconds()).slice(-2);
    const min = ('0' + currentDate.getMinutes()).slice(-2);
    const hora = ('0' + currentDate.getHours()).slice(-2);
    
    hr.innerHTML = hora
    minutos.innerHTML = min
    segundos.innerHTML = seg
}
sethour()

var nome = 'Juan' //window.prompt('Digite Seu Nome: ').toUpperCase()
var data = new Date()
var hora = ("0" + data.getHours()).slice(-2)
var dia = ("0" + data.getUTCDate()).slice(-2)
var mes = ("0" + (data.getUTCMonth() + 1)).slice(-2)
var ano = data.getUTCFullYear()

var hoje = document.querySelector('h1#idata')
var fundo = document.querySelector('body#fundo')
var saud = document.querySelector('h3#isaud')
var foto = document.querySelector('div#iimg')
var foto564 = document.querySelector('div#iimg564')

hoje.innerHTML = `${dia} / ${mes} / ${ano}`

if (hora <= 23 && hora >= 19){
    saud.innerHTML = `Boa noite ${nome} !`
    foto.style.background = "url(imagens/noite-300.jpg) top center"
    foto564.style.background = "url(imagens/noite-564.jpg) top center"
    fundo.style.background = "linear-gradient(to bottom, #000031, black)"
} else if (hora <= 18 && hora >= 16){
    saud.innerHTML = `Bom final de tarde ${nome} !`
    foto.style.background = "url(imagens/tarde-300.jpg) top center"
    foto564.style.background = "url(imagens/tarde-564.jpg) center center"
    fundo.style.background = "linear-gradient(to bottom, #000051, rgb(152, 99, 0)"
} else if (hora < 16 && hora > 12){
    saud.innerHTML = `Boa tarde ${nome} !`
    foto.style.background = "url(imagens/dia-300.jpg) top center"
    foto564.style.background = "url(imagens/dia-564.jpg) center center"
    fundo.style.background = "linear-gradient(-12deg, #ffe817, #000072 80%)"
}else if (hora <= 12 && hora > 07){
    saud.innerHTML = `Boa dia ${nome} !`
    foto.style.background = "url(imagens/dia-300.jpg) top center"
    foto564.style.background = "url(imagens/dia-564.jpg) center center"
    fundo.style.background = "linear-gradient(-12deg, #ffe817, #000072 80%)"
}else {
    saud.innerHTML = `Boa Madrugada ${nome} !`
    foto.style.background = "url(imagens/madrugada-300.jpg) top center"
    foto564.style.background = "url(imagens/madrugada-564.jpg) top center"
    fundo.style.background = "linear-gradient(15deg, #ff3700 10%, orange 40%, #004146 65%)"
}