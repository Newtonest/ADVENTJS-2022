function fitsInOneBox(boxes){
    return boxes.every((e,i)=>{
       
        if(i == boxes.length-1) return true;
        e.l < boxes[i+1].l && e.w < boxes[i+1].w && e.h < boxes[i+1].h
    })
}