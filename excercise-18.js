function dryNumber(dry,numbers){

    let arr = [];
    if(dry > 9 || dry < 0) return [];
    for(let i=1; i<numbers+1; i++){
        if(i.toString().includes(dry)){
            arr.push(i)
        }
    }
    return arr;
}

dryNumber(1, 15) 