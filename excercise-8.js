function checkPart(part){
    const reverse = Array.from(part).reverse().join('');
    if(part === reverse) return true;

    let atras = [...part];
    return atras.every((e,i)=>{
        let copia = [...atras];
        copia.splice(i,1);
        
        copia.reverse().join('') !== copia.join('')
    })}


checkPart("miidim")





function checkPart(part){
    const reverse = Array.from(part).reverse().join('');
    if(part === reverse) return true;

    let atras = [...part];
    atras.some((e,i)=>{
        let arr = [...atras];
        arr.splice(i,1);
        if(arr.reverse().join('') !== arr.join('')){
            return true
        };
    })
    return false
}





