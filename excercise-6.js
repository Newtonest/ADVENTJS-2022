function createCube(size) {
    let finalString = '';
     let stringDeAbajo = '';
     const open = '/';
     const close = '\\';
     const under = '_';
 
 
 
     
        for(let i = 1; i < size+1;i++){
            finalString += " ".repeat(size-i) + (open + close).repeat(i)+ under + (close+under).repeat(size-1) + close + '\n'
        }
     
        for(let h = size;h>0;h--){
            stringDeAbajo+= " ".repeat(size-h)+'\\/'.repeat(h)+ (under + open).repeat(size) + (h == 1?'':'\n')
        }
        return finalString+stringDeAbajo;
 }