

let grade = 100;

const graderFunc = () => {
  if (grade < 64) {
    return 'F';
  }
  else if(grade > 64 && grade < 69){
    return 'D';
  }
  else if(grade > 69 && grade < 79){
    return 'C';
  }
  else if(grade > 79 && grade < 89){
    return 'B';
  }
  else if(grade > 89 && grade < 101){
    return 'A';
  }
}
console.log(graderFunc())