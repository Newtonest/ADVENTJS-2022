function fitsInOneBox (boxes){
    let arr = [];
    let res;
    boxes.forEach((e)=>{
        let value = Object.values(e).reduce((acc,e)=>{return acc = acc + e;},0);
        arr.push(value)
    })
    let max = Math.max(arr);
    let index = arr.indexOf(max)
    let arraisito = arr.slice(index,1);

    let suma = arraisito.reduce((acc,e)=>{return acc = acc + e},0);

    if(suma < max) {
         res = true
    } else{
        res = false
    }
    
return res
}