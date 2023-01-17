function countSequence(n) {
  currSeq = '121';

  for (let k = 0; k < n; k++){
  
    let count = 0;
    let leadingIndex = 0;
    let followingIndex = 0;
    let result = ""
    
    for (let i = 0; i < currSeq.length; i++) {

      if (currSeq[followingIndex] !== currSeq[leadingIndex]){
        result = result + count + currSeq[followingIndex]; //
        followingIndex = leadingIndex;
        count += 1;
      } else {
        count += 1; 
      }
      leadingIndex += 1;

      if (currSeq.length < leadingIndex){
        result = result + count + currSeq[followingIndex]; //
      currSeq = result;
    }
  }
  return result;
  }
}


console.log(countSequence(1));