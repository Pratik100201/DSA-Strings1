var findOriginalArray = function(changed) {
   let a = []
   let b = changed.length / 2
   if (changed.length % 2 === 1) return []
   for( let i = 0 ; i< changed.length -1 ; i++){
       if(changed[i]*2 == changed[b+i]){
           a.push(changed[i])
       }
   }
   return a
};