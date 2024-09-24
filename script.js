// For card section
let total_money_id= document.getElementById("total_money_id"); 

let noakhali_input_id= document.getElementById("noakhali_input_id");
let feni_input_id= document.getElementById("feni_input_id");
let quota_input_id= document.getElementById("quota_input_id");



let noakhali_donate_button= document.getElementById("noakhali_donate_button");
let feni_donate_button= document.getElementById("feni_donate_button");
let quota_donate_button= document.getElementById("quota_donate_button");

let value=0;
let side_value1=0,side_value2=0,side_value3=0;



// For history section
let history_section= document.getElementById("history_section"); 
let all_card= document.getElementById("all_card");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");





noakhali_donate_button.addEventListener("click",function(){
     value=0;
     const currentDate = new Date();
   const formattedDate = currentDate.toString();
    
    let  noakhali_money_id = common_id_function("noakhali_money_id");
     value = value + parseFloat(noakhali_input_id.value);
     side_value1+=value;
     
   
     if(isNaN(value) || value<0)
     {
        alert("Please enter a valid amount");
        return;
     }
     noakhali_money_id.innerText= side_value1;
      total_money_id.innerText= parseFloat(total_money_id.innerText)- value;

      

      const para = document.createElement("div");
    para.innerHTML = `
    
  <div tabindex="0" class="collapse collapse-open border-base-300 bg-slate-300 border mx-auto w-2/3 mt-4">
  <div class="collapse-title text-xl font-medium">
  ${noakhali_money_id.innerText} Taka is Donated for ${c1.innerText}
  </div>
  <div class="collapse-content">
    <p class="custom-outline">Date:${formattedDate}</p>
  </div>
</div>
    `;


 history_section.appendChild(para);


      
    
})





feni_donate_button.addEventListener("click",function(){
  
     value=0;
     const currentDate = new Date();
     const formattedDate = currentDate.toString();
    let  feni_money_id = common_id_function("feni_money_id");
     value = value + parseFloat(feni_input_id.value);
     side_value2+=value;
    
  

     if(isNaN(value) || value<0)
     {
        alert("Please enter a valid amount");
        return;
     }
     feni_money_id.innerText= side_value2;
      total_money_id.innerText= parseFloat(total_money_id.innerText)-value;



      const para = document.createElement("div");
    para.innerHTML = `
    
  <div tabindex="0" class="collapse collapse-open border-base-300 bg-slate-300 border mx-auto w-2/3 mt-4">
  <div class="collapse-title text-xl font-medium">
  ${feni_money_id.innerText} Taka is Donated for ${c2.innerText}
  </div>
  <div class="collapse-content">
    <p class="custom-outline">Date:${formattedDate}</p>
  </div>
</div>
    `;


 history_section.appendChild(para);

    
})





quota_donate_button.addEventListener("click",function(){
  
    let value=0;
    const currentDate = new Date();
    const formattedDate = currentDate.toString();
    let  quota_money_id = common_id_function("quota_money_id");
     value += parseFloat(quota_input_id.value);
     side_value3+=value;
   
     if(isNaN(value) || value<0)
     {
        alert("Please enter a valid amount");
        return;
     }
     quota_money_id.innerText= side_value3;
      total_money_id.innerText= parseFloat(total_money_id.innerText)-value;




      const para = document.createElement("div");
    para.innerHTML = `
    
  <div tabindex="0" class="collapse collapse-open border-base-300 bg-slate-300 border mx-auto w-2/3 mt-4">
  <div class="collapse-title text-xl font-medium">
  ${quota_money_id.innerText} Taka is Donated for ${c3.innerText}
  </div>
  <div class="collapse-content">
    <p class="custom-outline">Date:${formattedDate}</p>
  </div>
</div>
    `;


 history_section.appendChild(para);
    
})




// For upper card button section

let donationButton = document.getElementById("donation_id");
let historyButton  = document.getElementById("history_id");


donationButton.addEventListener("click",function(){
      

    historyButton.classList.add("custom-outline","btn-outline");
    historyButton.classList.remove("custom-outline2");
    donationButton.classList.remove("custom-outline","btn-outline");
    donationButton.classList.add("custom-outline2");


    all_card.classList.remove("hidden");
    history_section.classList.add("hidden");
   
})


historyButton.addEventListener("click",function(){
   
    historyButton.classList.add("custom-outline2");
    historyButton.classList.remove("custom-outline","btn-outline");
    donationButton.classList.remove("custom-outline2");
    donationButton.classList.add("custom-outline","btn-outline");


    all_card.classList.add("hidden");
    history_section.classList.remove("hidden");


    
   
})

















