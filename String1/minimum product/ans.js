
function minValue(A, B)
{	let sum = 0
 let x = A.sort((a,b)=> a-b)
  let y = B.sort((a,b)=> b-a)
	for(let i = 0 ; i< x.length ; i++){
      
        sum += x[i]*y[i]
      
    }
 return sum
}