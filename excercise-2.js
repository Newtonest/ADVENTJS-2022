const holidays = ['01/06', '04/01', '12/25']

function countHour(year, holidays){
   return holidays.reduce((acc,v)=>{
   return new Date(v + `/${year}`).getDay() != 0 && new Date(v + `/${year}`).getDay() !=6? acc + 2 : acc; 


},0)   

}

