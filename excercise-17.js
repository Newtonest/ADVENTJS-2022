function carryGifts(gifts,maxWeight) {
    let newArr = [];
    gifts.forEach((e,i)=>{
        if(i === gifts.length - 1 && gifts[i].length === 0) return; 
        if(i === gifts.length-1 && gifts[i].length < maxWeight){
            newArr.push(gifts[i].toString())
        };
        if((e.length + gifts[i+1].length) <= maxWeight){
            let variable = `${e} ${gifts[i+1]}`  
            gifts.splice(i,2)
            newArr.push(variable);
            return;
        }
        if(e.length > maxWeight){
            return
        }
       else{
        newArr.push(e.toString());
        return;
        }
        
           
       
    })


    return newArr;
}


carryGifts(['game', 'bike', 'book', 'toy'], 10);
carryGifts(['game', 'bike', 'book', 'toy'], 7)


function carryGifts(gifts,maxWeight){
    return gifts.map((e,i)=>{
        if(i === gifts.length - 1 && gifts[i].length > maxWeight) return;
        if(i === gifts.length - 1 && gifts[i].length < maxWeight) return `${gifts[i]}`
        if(e.length > maxWeight) return;
        if(e.length + gifts[i+1].length < maxWeight){
            return `${e} ${gifts[i+1]}`;
            gifts.splice(i,2)
        } 
        
        if(e.length  + gifts[i+1].length > maxWeight && e.length < maxWeight) return `${e}`
    })
    }


function carryGifts(gifts,maxWeight){
    let valorActual = '';
    let arrToReturn = [];

    gifts.forEach((e,i)=>{
        if(e.length > maxWeight){
            gifts.splice(i,1)
        };
        if(valorActual.length + e.length < maxWeight){
            valorActual += e
        }
        if(valorActual.length + e.length > maxWeight){
            arrToReturn.push(valorActual);
            valorActual = ''
            valorActual += e
        }
    })
return arrToReturn
}







function carryGifts (gifts,maxWeight){
    let arr = gifts.filter( e => e.length <= maxWeight);
    if(arr.length === 0 ) return [];

    let valorActual = '';
    let arrToReturn = [];
    let acc = 0;

    arr.forEach((i,index)=>{
        acc += i.length
        if(acc <= maxWeight){
         valorActual+= `${i} `;
         gifts.splice(i,1);
         return;
        } else{
            arrToReturn.push(valorActual);
            valorActual =`${i} `;
            acc = i.length;
            gifts.splice(i,1)
         }
   
    })
 return arrToReturn
}

carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)


//arr.reduce((acc,item)=>{
    if(acc < maxWeight) {
     return acc = acc + item.length ;
     valorActual = `${item} `  
 } else{
     return acc = 0;
     arrToReturn.push(valorActual);
     valorActual = undefined;
  }
 //},0);
