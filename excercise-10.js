function checkJump(heights){
    let max = Math.max(...heights)
    let index = heights.lastIndexOf(max);
   
    let first = heights.slice(0,index);
    let second = heights.slice(index+1 , heights.length-1+1);
    
    let primero;
    let segundo;

   first.forEach((e,i) => {
        if(i == 0 && e <= max){
            primero = true;
            return;
        } 
        if(e >= first[i-1] && e <= max) primero = true;
        else{
            primero = false;
        }
   })

    second.forEach((e,i) => {
       if(i == 0 && e <= max) {
        return
        segundo = true
    };
       if(e <= second[i-1] && e <= max) segundo = true;
       else{
        segundo = false;
       }
    })


    return primero && segundo 
    }
    
   
  
  checkJump([1, 2, 1])
  checkJump([1, 2, 3, 1, 3, 1])