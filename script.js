import Board from "./Board.js"

const boardContainer = document.querySelector('.board_container')

const arrDiv = []

for (let i = 0; i<6; i++) {
  const row = []
  for (let j = 0; j<7; j++) {
    const div = document.createElement('div')
    div.classList.add('box')
    row.push(div)
  }
  arrDiv.push(row)
}
arrDiv.forEach(x => {
  x.forEach(y=>{
    boardContainer.appendChild(y)
  })
})

const controller = document.createElement('div')
controller.classList.add('controller')
for (let i = 0; i<7; i++) {
  const div = document.createElement('div')
  div.controllerId = i
  controller.appendChild(div)
}
boardContainer.appendChild(controller)



const board = new Board()

const updateBoard = () => {
  clearBoard()
  board.board.forEach((x,i) => {
    x.forEach((y,j)=>{
      if (!y) return
      const div = document.createElement('div')
      div.classList.add(y === 1? 'red':'yellow')
      arrDiv[i][j].appendChild(div)
    })
  })

}

const clearBoard = () => {
  arrDiv.forEach(x=>{
    x.forEach(y=>{
      // console.log(y)
      while (y.firstChild){
        y.removeChild(y.firstChild)
      }
      // y.removeChild(y.firstChild)
    })
  })
}

controller.addEventListener('click', e => {
  if (e.target.controllerId === undefined) return
  board.insert(e.target.controllerId+1)
  updateBoard()
})