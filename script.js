geradorQuadroPixel(5,5)

function geradorQuadroPixel (linhas, colunas) {
  for (let i = 0; i < colunas; i += 1) {

    let divPai = document.querySelector('#pixel-board')
    let colums = document.createElement('div');
    colums.className = 'pixel-coluna'

    for (let i2 = 0; i2 < linhas; i2 += 1) {
        let pixels = document.createElement('div');
        pixels.className = 'pixel'
        colums.appendChild(pixels)
    }
    divPai.appendChild(colums)
  }
}
