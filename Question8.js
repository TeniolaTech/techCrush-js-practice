gradeScore(89);
function gradeScore(score) {
  if (score >= 70 || score === 100){
    console.log("score A")
  }else if (score >= 60 || score === 69){
    console.log("score B")
  }else if (score >= 50 || score === 59 ){
    console.log("score C")
  }else if (score >= 40 || score === 49){
    console.log("score D")
  }else if(score <= 30){
    console.log("score F")
  }
}
