window.onload = function (){
  let corPreta = document.querySelector('.color')
  corPreta.className = 'color preto selected'
}

geradorQuadroPixel(5,5,40)

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
        colums.appendChild(pixels)
    }
    divPai.style.width =  ((tamanho + 2)  * linhas) + 'px'
    divPai.appendChild(colums)
  }
}
