function getCompleted(part,total){
    let partMinutes = 0;
    let totalMinutes = 0;
    
    part.split(':').forEach((e,i)=>{
        if(i === 0) partMinutes += e*60;
        if(e == '00') return;
        if(i === 1) partMinutes += e;
        if(i === 2) partMinutes += e/60
    })
     
    
    total.split(':').forEach((e,i)=>{
        if(i === 0) totalMinutes += e*60;
        if(e == '00') return;
        if(i === 1) totalMinutes += e;
        if(i === 2) totalMinutes += e/60
    })

    if(Math.floor(totalMinutes/partMinutes) !== 0) return `1/${totalMinutes/partMinutes}`;
    
    
     }
    
    
    
     getCompleted('02:20:20', '03:30:30')


     function getCompleted(part,total){
        let partMinutes = 0;
        let totalMinutes = 0;
        
        part.split(':').forEach((e,i)=>{
            if(i === 0) partMinutes += e*60;
            if(e == '00') return;
            if(i === 1) partMinutes += e;
            if(i === 2) partMinutes += e/60
        })
         
        
        total.split(':').forEach((e,i)=>{
            if(i === 0) totalMinutes += e*60;
            if(e == '00') return;
            if(i === 1) totalMinutes += e;
            if(i === 2) totalMinutes += e/60
        })
    
       
        
        
         }
        