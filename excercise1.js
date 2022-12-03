const gifts = ['book', 'game', 'socks']

function wrapping(gifts){
    let toReturnValue = []
    for(let i=0; i<gifts.length; i++){
        let gift = gifts[i]
        let numerales = "";
        let largo = gifts[i].length + 2;
        for(let j=0; j<largo; j++){
           numerales += "*"
           
        }
      let arraisito = [];
      arraisitoIndex = numerales +  "\n*" + gift + "*" + "\n" + numerales ;
      toReturnValue.push(arraisitoIndex);
 
    }
 return toReturnValue
  
}

wrapping(gifts)


//arraisito[0] = numerales;
//arraisito[1] = "\n*" + gifts[i] + "*";
//arraisito[2] = "\n" + numerales ;


//Solucion Mucho mas optima

//function wrapping (gifts) {
    //return gifts.map(
      //gift =>
        //`${'*'.repeat(gift.length + 2)}\n*${gift}*\n${'*'.repeat(
          //gift.length + 2
        //)}`
    //)
  //}