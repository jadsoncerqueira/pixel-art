window.onload = function inicial() {
  const corPreta = document.querySelector('.color');
  corPreta.className = 'color preto selected';
  localStorage.setItem('cor', 'black');
};

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

function geradorQuadroPixel(linhas, colunas, tamanho) {
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
    const gradeTamanho = (tamanho + 2) * linhas;
    divPai.style.width = `${gradeTamanho}px`;
    divPai.appendChild(colums);
  }
}
const botaoClear = document.querySelector('#clear-board');
botaoClear.addEventListener('click', limpaQuadro)
function limpaQuadro() {
  let divPixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < divPixel.length; i += 1) {
    divPixel[i].style.backgroundColor = 'white'
  }
}

geradorQuadroPixel(5, 5, 40);
