	function getMaxGifts(giftsCities,maxGifts,maxCities){     
		let vari = 0;
		let newArr = giftsCities.filter(item=> item < maxGifts)
        if(newArr.length === 0) return 0;
		let contador = 0;
      
		for(let i = 0; i<maxCities+1;i++){
			if(contador == maxCities) return;	
			 let maximo = Math.max(...newArr);
			 let index = newArr.indexOf(maximo);
			 newArr.splice(index,1);
		
			 vari += maximo;
		     contador ++;
			 if(vari == maxGifts && contador != maxCities){
				vari -= maximo;
				contador --
			 }
			 if(vari > maxGifts){
				vari -= maximo;
				contador --
			 };
	      
	
			
          }
return vari    
  }


  getMaxGifts([12, 3, 11, 5, 7], 20, 3);
  getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)






  function getMaxGifts(giftsCities,maxGifts,maxCities){ 
	let newArr = giftsCities.filter((e)=>{
		e < maxGifts
	});
	if(newArr.length === 0) return 0;
	let contador = 0;

    return newArr.reduce((acc,item)=>{
		let max = Math.max(...newArr);
		let index = newArr.indexOf(max)
		newArr.splice(index,1);
        return acc = acc + max ;
		contador ++;

        if(acc == maxGifts && contador != maxCities) return acc = acc-max;
		contador--
		

	},0)

  }



  function getMaxGifts(giftsCities,maxGifts,maxCities){
	let toReturnValue = 0;
	let newArr = giftsCities.filter(item=> item< maxGifts);
	if(newArr.length === 0) return 0;

    return newArr.reduce((acc,item)=>{
	  let max = Math.max(...newArr);
	  let i = newArr.indexOf(max)
	  newArr.splice(max,1);

	  return acc = acc + max;
	  contador ++;	
      if(acc > maxGifts ){
		return acc = acc-max;
	    contador --;
	};
	  if(contador <= maxCities && acc == maxGifts || contador == maxCities && acc <=maxGifts) return acc ;
	},0)


  }







  function getMaxGifts(giftsCities, maxGifts, maxCities) {
	let toReturnValue = 0;
	let newArr = giftsCities.filter(item=> item< maxGifts);
	if(newArr.length === 0) return 0;

    return newArr.reduce((acc,item,index)=>{
	  return acc = acc + item;
	  contador ++;	
      if(acc > maxGifts ){
		return acc = acc-item;
	    contador --;
	};
	  if(contador <= maxCities && acc == maxGifts || contador == maxCities && acc <=maxGifts) return acc ;
	},0)
}