let box=document.querySelector(".box");

fetch("data.json").then(res=>res.json())
.then(data=> Product(data));

function Product(data){
   let services=data.data.services;
   for (let i = 0; i <services.length ; i++) {
       let subServices = services[i].subServices;
    
        let subServicesTitles = subServices.map(subService => `<p>${subService.title_en}</p>`).join('');
   
let boxInfo=document.createElement("div");
boxInfo.classList.add("box1");
boxInfo.innerHTML=`
                <div class="box-start">
                   <img src="./image/Rectangle 14 (1).png" alt="" class="image">
                <div class="box-info">
                   <h5>${services[i].title_en}</h5>
                   <h6>Stars from 10$</h6>
                </div>
                </div>
                    <div class="box-end">
                    ${subServicesTitles}
                    </div>
                `
                boxInfo.querySelector(".box-start").addEventListener("click",function(){
                   document.querySelectorAll(".box-end").forEach(boxEnd => {
                      boxEnd.style.display="none"
                  })
                  let boxEnd=boxInfo.querySelector(".box-end");
            
                  if (boxEnd.style.display=="none") {
                     boxEnd.style.display="block"
                  }
                  else{
                     boxEnd.style.display="none"
                  }
                  });
                box.appendChild(boxInfo);
}
};
