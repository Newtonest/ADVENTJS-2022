
const leds = [0, 1, 1, 0, 1]
function countTime(leds){
   let copia = [...leds];
   let contador = 0;
   leds.forEach((e,i)=>{
    if(leds[0] ==  0 && leds.pop() == 1 && leds[1] == 1){
        copia.splice(0,1,1);
        } 
  
    if(leds[0] && leds.pop() == 1 && leds[1] == 0){
        copia.splice(0,1,1);
        contador++;
    } 
   if(e == 0 && copia[i-1] == 1){
    copia.splice(i,1);
    contador++
   }
});
return contador*7
}








function countTime(leds){
    let copia = [...leds];
    let contador = 0;
    leds.forEach((e,i)=>{
        if(e == 0 && copia[i-1] == 1){
            copia.splice(i,1);
            contador++
           }
          
        });
        if(leds[0] ==  0 && leds.pop() == 1 && leds[1] == 1){
            copia.splice(0,1,1);
            } 
      
          if(leds[0] && leds.pop() == 1 && leds[1] == 0){
            copia.splice(0,1,1);
            contador++; 
            countTime(copia)
        }
        return contador*7
}