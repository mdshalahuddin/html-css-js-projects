let countEl = document.querySelector('.count');
const increasebtn =document.querySelector('.inc');
const decreasebtn = document.querySelector('.dec');
const resetbtn = document.querySelector('.reset');
let counts = 0;
decreasebtn.addEventListener("click",()=>{
    counts--;
    countEl.innerHTML = counts;
    if(counts>1 || counts<0){
        countEl.style.color = "green";
    }if(counts == 0){
        countEl.style.color = "blue";
    }
})

increasebtn.addEventListener("click",()=>{
    counts++;
    countEl.innerHTML = counts;
    if(counts>0){
        countEl.style.color = "green";
    }if(counts == 0){
        countEl.style.color = "blue";
    }
})
resetbtn.addEventListener("click",getReset)

function getReset(){
    counts = 0;

    countEl.innerHTML = counts;

}