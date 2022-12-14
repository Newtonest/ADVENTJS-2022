function selectSleigh(distance,sleighs){
    let nameToReturn = null;
    let mejor;


    sleighs.forEach((e)=>{
        let gasto = e.consumption
        let total = distance/gasto;

        if(gasto * distance > 20) return;
        if(mejor == undefined || total < mejor){
            nameToReturn = e.name;
            let mejor = total
        }
    })
    return nameToReturn
}

//Mejor forma
//function selectSleigh(distance, sleighs) {
  //  const baterryVatios = 20
    //const betterChoice = [...sleighs]
      //.reverse()
      //.find(({ consumption }) => consumption * distance <= baterryVatios)
    //return betterChoice ? betterChoice.name : null
  //}