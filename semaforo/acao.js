//Definição de constantes
const img = document.getElementById('img'); //buscar a imagem pelo id
const buttons = document.getElementById('buttons'); //buscar o botão pelo id
let colorIndex = 0;
let intervalId = null;

// Função que recebe o evento efectuado
const trafficLight = (event) => {
	//console.log(event.target); //verificar na cmd qual resposta do evento recebido no parâmetro
    stopAutomatic(); //parar com a execução automática
	
	//turnOn['red'](); executar cada opção da função turnOn
    turnOn[event.target.id]();
}

//Função index executado no changeColor para ir a cor seguinte
const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

/*
Modelo if-else
	if(colorIndex < 2){
		colorIndex++;
	}else{
		colorIndex = 0;
	}
*/

//Para trocar de cor no modo automático
const changeColor = () => {
    const colors = ['red','yellow','green'] //array de cores a usar o índice na linha abaixo
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval (intervalId);
}

//Função de ligar
const turnOn = {
    'red':      () => img.src = './imagens/vermelho.png',
    'yellow':   () => img.src = './imagens/amarelo.png',
    'green':    () => img.src = './imagens/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000) //mudar de cor a cada 1 segundo
}

//Busca a função ao efectuar o click no botão
buttons.addEventListener('click', trafficLight);