window.onload = function (){
  let corPreta = document.querySelector('.color')
  corPreta.className = 'color preto selected'
  localStorage.setItem('cor', 'black')
}


geradorQuadroPixel(5,5,40)
let elementoSelecionado = document.getElementsByClassName('color')
for(let i3 = 0; i3 < elementoSelecionado.length; i3 += 1) {
    elementoSelecionado[i3].addEventListener('click', selecao)
}


function geradorQuadroPixel (linhas, colunas, tamanho) {
  for (let i = 0; i < colunas; i += 1) {

    let divPai = document.querySelector('#pixel-board')
    let colums = document.createElement('div');
    colums.className = 'pixel-coluna'

    for (let i2 = 0; i2 < linhas; i2 += 1) {
        let pixels = document.createElement('div');
        pixels.className = 'pixel'
        pixels.style.width = tamanho + 'px'
        pixels.style.height = tamanho + 'px'
        pixels.style.backgroundColor = 'white'
        pixels.addEventListener("click", colorPixel)
        colums.appendChild(pixels)
    }
    divPai.style.width =  ((tamanho + 2)  * linhas) + 'px'
    divPai.appendChild(colums)
  }
}

function selecao(pix) {
    let pixelColor = document.getElementsByClassName('color');
    for (let i = 0; i < pixelColor.length; i += 1) {
        if (pixelColor[i].className.includes('selected') == true) {
            pixelColor[i].className = pixelColor[i].className.replace(' selected', '')
            pix.target.className = pix.target.className + ' selected'
            localStorage.setItem('cor', pix.target.style.backgroundColor)
        }  
    }
}

function colorPixel(event) {
  let pixel = event.target;
  console.log(pixel.style.backgroundColor === 'white')
  if (pixel.style.backgroundColor === 'white') {
    pixel.style.backgroundColor = localStorage.getItem('cor')
  }else {
    pixel.style.backgroundColor = 'white'
  }
  
}

