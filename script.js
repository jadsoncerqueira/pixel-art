window.onload = function inicial() {
  const corPreta = document.querySelector('.color');
  corPreta.className = 'color preto selected';
  localStorage.setItem('cor', 'black');
};

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

const elementoSelecionado = document.getElementsByClassName('color');
for (let i3 = 0; i3 < elementoSelecionado.length; i3 += 1) {
  elementoSelecionado[i3].addEventListener('click', selecao);
}

function colorPixel(event) {
  const pixel = event.target;
  pixel.style.backgroundColor = localStorage.getItem('cor');
}

function geradorQuadroPixel(tamanho) {
  const divPai = document.querySelector('#pixel-board');
  divPai.style.setProperty('--carro', tamanho);
  divPai.innerHTML = '';
  for (let i = 0; i < tamanho * tamanho; i += 1) {
    const pixels = document.createElement('div');
    pixels.className = 'pixel';
    pixels.style.backgroundColor = 'rgb(255, 255, 255)';
    pixels.addEventListener('click', colorPixel);
    divPai.appendChild(pixels);
  }
}

geradorQuadroPixel(5)
function limpaQuadro() {
  const divPixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < divPixel.length; i += 1) {
    divPixel[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

function geraQuadro() {
  let entrada = document.querySelector('#board-size').value;
  if (entrada === '') {
    alert('Board inválido!');
  } else if (entrada > 50) {
    entrada = 50;
  } else if (entrada < 5) {
    entrada = 5;
  }
  geradorQuadroPixel(entrada);
}

const botaoGerar = document.querySelector('#generate-board');
botaoGerar.addEventListener('click', geraQuadro);

const botaoClear = document.querySelector('#clear-board');
botaoClear.addEventListener('click', limpaQuadro);

function geradorHexadecimal() {
  const paleta = document.getElementsByClassName('color');
  for (let index = 1; index < paleta.length; index += 1) {
    let codigoHexa = '#';
    const base = '0123456789ABCDEF';
    for (let i = 0; i < 6; i += 1) {
      codigoHexa += base.charAt(Math.floor(Math.random() * base.length));
    }
    paleta[index].style.backgroundColor = codigoHexa;
  }
}
geradorHexadecimal();
