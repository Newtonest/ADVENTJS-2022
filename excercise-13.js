
//tres posibles soluciones 

function getFilesToBackup(lastBackup,changes){
 let arr = changes.filter((e)=> e[1] > lastBackup )
 let sArr = arr.map((e)=> e[0]).sort((a,b)=>{return a-b})
 
 return [...new Set(sArr)]
}





  function getFilesToBackup(lastBackup,changes){
     return [...new Set(changes.filter((e)=> e[1] > lastBackup ).map((e)=> e[0]).sort((a,b)=>{return a-b}))] 
    }


   function getFilesToBackup(lastBackup,changes){
    let arr = changes.filter((e)=> e[1] > lastBackup )
    let sArr =[...new Set(arr.map((e)=> e[0]).sort((a,b)=>{return a-b}))] 
    
    return sArr
   }

