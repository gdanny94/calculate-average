function findAverage(array) {
    
    return array.length === 0 ? 0 : Number(array.reduce( (a,c) => a + c , 0) / array.length) 
    
  
    
     
  }
  
  console.log( findAverage([]))