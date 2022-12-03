function distributeGifts(packOfGifts,reindeers){
    let peso = packOfGifts.reduce((acc,item)=>{
        return acc = acc + item.length;
    },0);

    let maxCap = reindeers.reduce((acc,item)=>{
     return acc = acc + item.length*2;
    },0)

    return Math.floor(maxCap / peso) 
}