function carryGifts(gifts, maxWeight){
    let filteredGifts = gifts.filter(gift=> gift.length <= maxWeight);
    if(filteredGifts.length === 0) return [];


    let strToReturn = '';
    let acumulador = 0;
 
    return filteredGifts.reduce((acc,gift,idx) =>{ 
      let filteredGift = strToReturn.split('').filter(e => e ==' ').length
      if(gift.length + (strToReturn.length-filteredGift) <= maxWeight){
          strToReturn +=`${gift} `;
          if(idx === (filteredGifts.length-1)){
           acc.push(strToReturn.trim())
           return acc
          }
           return acc
    }{
          acc.push(strToReturn.trim());
          strToReturn = '';  
          strToReturn+=`${gift} `;
          if(idx === (filteredGifts.length-1)){
            acc.push(strToReturn.trim())
            return acc
          }
          return acc
        }
        return acc
    },[])
}


