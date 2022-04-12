

const logStep =(N)=> {
  let once = '#';
   for(let i =0; i < N ; i++) {
     console.log(`${once.repeat(i+1)}${' '.repeat(N-i-1)}`);
   }
} 
console.log(logStep(6))



