let link =document.getElementsByClassName("link");
let currentvalue = 1;
 
 
function back(){
    if(currentvalue <1){
        for(l of link){
            l.classList.remove("active1");
        }
        currentvalue --;
        link[currentvalue+1].classList.add("active1");
    }
}
function next(){
    if(currentvalue >3){
        for(l of link){
            l.classList.remove("active1");
        }
        currentvalue ++;
        link[currentvalue-1].classList.add("active1");
    }
}