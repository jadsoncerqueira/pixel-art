window.onload = function inicial(){
  let corPreta = document.querySelector('.color');
  corPreta.className = 'color preto selected';
  localStorage.setItem('cor', 'black');
}


geradorQuadroPixel(5,5,40)
let elementoSelecionado = document.getElementsByClassName('color')
for(let i3 = 0; i3 < elementoSelecionado.length; i3 += 1) {
  elementoSelecionado[i3].addEventListener('click', selecao);
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
    let divPai = document.querySelector('#pixel-board');
    const colums = document.createElement('div');
    colums.className = 'pixel-coluna';
    for (let i2 = 0; i2 < linhas; i2 += 1) {
      const pixels = document.createElement('div');
      pixels.className = 'pixel';
      pixels.style.width = String(tamanho + 'px');
      pixels.style.height = String(tamanho + 'px');
      pixels.style.backgroundColor = 'white';
      pixels.addEventListener("click", colorPixel);
      colums.appendChild(pixels);
    }
    divPai.style.width = String(((tamanho + 2) * linhas) + 'px');
    divPai.appendChild(colums);
  }
}

function selecao(pix) {
  const pixelColor = document.getElementsByClassName('color');
  for (let i = 0; i < pixelColor.length; i += 1) {
    if (pixelColor[i].className.includes('selected')) {
      const elemento = pix.target;
      pixelColor[i].className = pixelColor[i].className.replace(' selected', '');
      elemento.className = String(elemento.className + ' selected');
      localStorage.setItem('cor', elemento.style.backgroundColor);
    }
  }
}
