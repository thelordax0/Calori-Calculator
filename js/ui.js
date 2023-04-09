const cardContainer = document.querySelector(".card-container");
const resultElement=document.getElementById("result")
class UI {
  static async drawCards() {
    let json = await Data.getData();
    json.forEach((cardData) => {
      cardContainer.innerHTML += `
                 <div class="card">
                    <img src="https://picsum.photos/300/200" alt="Resim">
                    <h2>${cardData.name}</h2>
                    <h6>${cardData.calori} kcal/gr</h6>
                    <input type="number"  min="0"  placeholder="100 gr">
                
                 </div>
        
        `;
    });
  }

static displayKcal(kcal){
    resultElement.innerHTML=`
        Toplam Kalori ${kcal} kcal
    
    `;
}



}
UI.drawCards();
