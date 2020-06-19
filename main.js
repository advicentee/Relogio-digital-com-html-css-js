
function relogio(){

    //recebendo os dados
    const horas     = document.getElementById('horas')
    const minutos   = document.getElementById('minutos')
    const segundos  = document.getElementById('segundos')
    const dia       = document.getElementById('dia')
    const mes       = document.getElementById('mes')
    const ano       = document.getElementById('ano')
    const hoje      = document.getElementById('hoje')


    //criando variáveis para pegar o dia e o mes certo
    let dias     = new Array('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado')
    let meses    = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Outubro', 'Novembro', 'Dezembro')


    //pegando a data atual
    let h   = new Date().getHours()
    let m   = new Date().getMinutes()
    let s   = new Date().getSeconds()
    let ds  = dias[new Date().getDay()]//se não usar o array ele pega de 0-6, e não dias tipo segunda, terça...
    let d   = new Date().getDate()
    let me  = meses[new Date().getMonth()]//o mesmo acontece aqui sem o array ele conta os mese de 0-11, então é necessáro usar arrays para mostrar o mes exato do ano
    let a   = new Date().getFullYear()

    
    //mostrando os dados
    horas.innerHTML     = h
    minutos.innerHTML   = m
    segundos.innerHTML  = s
    hoje.innerHTML      = ds
    dia.innerHTML       = d
    mes.innerHTML       = me
    ano.innerHTML       = a 

}
var intervalo = setInterval(relogio, 1000)
