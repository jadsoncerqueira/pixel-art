window.onload = function inicial() {
  const corPreta = document.querySelector('.color');
  corPreta.className = 'color preto selected';
  localStorage.setItem('cor', 'black');
};

// geradorCor();

const elementoSelecionado = document.getElementsByClassName('color');
for (let i3 = 0; i3 < elementoSelecionado.length; i3 += 1) {
  elementoSelecionado[i3].addEventListener('click', selecao);
}

function selecao(pix) {
  const pixelColor = document.getElementsByClassName('color');
  for (let i = 0; i < pixelColor.length; i += 1) {
    if (pixelColor[i].className.includes('selected')) {
      const elemento = pix.target;
      pixelColor[i].className = pixelColor[i].className.replace('selected', '');
      elemento.className = `${elemento.className} selected`;
      localStorage.setItem('cor', elemento.style.backgroundColor);
    }
  }
}

function colorPixel(event) {
  const pixel = event.target;
  if (pixel.style.backgroundColor === 'white') {
    pixel.style.backgroundColor = localStorage.getItem('cor');
  } else {
    pixel.style.backgroundColor = 'white';
  }
}

function geradorQuadroPixel(linhas, colunas, tamanho = 40) {
  const px1 = document.getElementById('pixel-board');
  px1.innerHTML = ''
  for (let i = 0; i < colunas; i += 1) {
  const divPai = document.querySelector('#pixel-board');
  const colums = document.createElement('div');
  colums.className = 'pixel-coluna';
  for (let i2 = 0; i2 < linhas; i2 += 1) {
    const pixels = document.createElement('div');
    pixels.className = 'pixel';
    pixels.style.width = `${tamanho}px`;
    pixels.style.height = `${tamanho}px`;
    pixels.style.backgroundColor = 'white';
    pixels.addEventListener('click', colorPixel);
    colums.appendChild(pixels);
  }
  divPai.style.width = `${(tamanho + 2) * colunas }px`;
  divPai.appendChild(colums);
  }
  
}
const botaoGerar = document.querySelector('#generate-board');
botaoGerar.addEventListener('click', geraQuadro)

const botaoClear = document.querySelector('#clear-board');
botaoClear.addEventListener('click', limpaQuadro)
function limpaQuadro() {
  let divPixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < divPixel.length; i += 1) {
    divPixel[i].style.backgroundColor = 'white'
  }
}


function geraQuadro() {
  let entrada = document.querySelector('#board-size').value
  if (entrada === '') {
    alert('Board inválido!')
  } else if (entrada > 50) {
    entrada = 50
  } else if (entrada < 5) {
    entrada = 5
  }
geradorQuadroPixel(entrada, entrada);
}

// function geradorCor() {
//   let paleta = document.getElementsByClassName('color')
//   const letrasNumeros = '0123456789ABCDEF';
//   let color = '#';
  
//   for (let i = 0; i < paleta.length; i += 1) {
//     color += letrasNumeros[Math.floor(Math.random() * 16)];
//     paleta[i].style.backgroundColor = color
//   }
// }

