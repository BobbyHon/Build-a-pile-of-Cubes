function findNb(m) {
    let n = 0
    let nAnswer = 0
    while(m > nAnswer){
      ++n
      nAnswer += Math.pow(n, 3)
    }
      return m == nAnswer ? n : -1;
  }