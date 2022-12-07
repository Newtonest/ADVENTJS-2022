
// mi forma bastante horrible
//function getGiftsToRefill(a1, a2, a3) {
  //  let arr = [];
  
  //a1.forEach(element => {
    //  if(a2.includes(element) || a3.includes(element))return;
     // if(arr.includes(element)) return;
      //arr.push(element); 
  //});
  
 // a2.forEach(element => {
   //   if(a1.includes(element) || a3.includes(element))return;
     // if(arr.includes(element)) return;
       //arr.push(element);
  //});
  
 // a3.forEach(element => {
   //   if(a1.includes(element) || a2.includes(element))return;
     // if(arr.includes(element)) return;
      //arr.push(element);
      
  //});
   //return arr
  //}
 //codigo hermoso
  function getGiftsToRefill(a1, a2, a3) {
  
    const set = [...new Set([...a1, ...a2, ...a3])];
    
    const result = set.filter((gift) => a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1);
  
    return result;
  }