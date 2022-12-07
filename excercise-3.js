const distributeGifts=(packOfGifts,reindeers)=>{
    let peso = packOfGifts.reduce((acc,item)=>{
        return acc = acc + item.length;
    },0);

    let maxCap = reindeers.reduce((acc,item)=>{
     return acc = acc + item.length*2;
    },0)

    return Math.floor(maxCap / peso) 
}


// otra forma clean
//distributeGifts = (packOfGifts,reindeers)=>{
    //const packOfGiftsWeigth = packOfGifts.join("").length;
    //const reindeersCanCarry = reindeers.join("").length*2;

    //return Math.floor(reindeersCanCarry / packOfGiftsWeigth)
//}