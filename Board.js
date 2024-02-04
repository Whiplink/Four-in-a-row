class Board {
  constructor(){
    this.board = [
      ['','','','','','',''],
      ['','','','','','',''],
      ['','','','','','',''],
      ['','','','','','',''],
      ['','','','','','',''],
      ['','','','','','',''],
    ]
    this.turn = 1
  }
  
  insert(x){
    let starting = 5
    while(this.board[starting][x-1]){
      starting--
      if (starting < 0) return
    }
    this.board[starting][x-1] = this.turn
    this.turn = this.turn === 1? 2:1
  }
  
}

export default Board