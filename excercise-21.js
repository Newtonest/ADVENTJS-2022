function printTable(gifts){
    let maxLength = 0;
    gifts.forEach((e,i)=>{
        if(i.length > maxLength || maxLength === undefined) maxLength = i.length;
    })
  return "+".repeat((maxLength*maxLength+1)-1) + '\n|' 



}