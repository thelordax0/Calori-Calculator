
const calcBtn=document.querySelector("#calculate-btn")




// 
//event listeners

eventListeners();


function eventListeners(){

    


    calcBtn.addEventListener("click",calculate)
}


async function calculate(){
    //get inputs
    let totalCalori=0;
    let json=await Data.getData();
    //calculate calories
    Array.from(cardContainer.children).forEach((card,index)=>{
        totalCalori+=card.lastElementChild.value *json[index].calori
    })
    console.log(totalCalori);
    



    //display to ui

    UI.displayKcal(totalCalori)
}

