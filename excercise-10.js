function checkJump(heights){
 let max = Math.max(...heights);
 let index = heights.indexOf(max);

 let first = heights.slice(0,index);
 let second = heights.slice(index + 1, heights.length - 1 + 1);
 if(first.length == 0 || second.length == 0) return false;

 let primero = first.every((e,i)=>{
    if(first.length == 1 && e <= max) return true;
    if(i == first.length-1 && e<= max && e >= first[i-1]) return true;
    return e <= first[i+1] && e<= max
}) 

 let segundo = second.every((e,i)=>{
    if(second.length == 1 && e <= max) return true;
    if(i == second.length -1 && e <= max && e <= second[i-1]) return true ;
    return e >= second[i+1] && e <= max;
 })




return primero && segundo
}

 