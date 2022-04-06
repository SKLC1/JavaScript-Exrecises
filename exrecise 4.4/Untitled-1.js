
let arr = [1,2,3,4,5,6,7,8,9,10];
let n = 10;

const boom =(arr, n)=> {
  for(var i = 0; i < n ; i++) {
    if ( arr.includes(7))
     {
      console.log("boom");
    }
  }
}

console.log(boom(arr,n))
