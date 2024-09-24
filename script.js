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
noakhali_donate_button.addEventListener("click",function(){
     value=0;
    
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
      
    
})





feni_donate_button.addEventListener("click",function(){
  
     value=0;
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

    
})





quota_donate_button.addEventListener("click",function(){
  
    let value=0;
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
    
})




// For upper card button section

let donationButton = document.getElementById("donation_id");
let historyButton  = document.getElementById("history_id");


donationButton.addEventListener("click",function(){
      

    historyButton.classList.add("custom-outline","btn-outline");
    historyButton.classList.remove("custom-outline2");
    donationButton.classList.remove("custom-outline","btn-outline");
    donationButton.classList.add("custom-outline2");
   
})


historyButton.addEventListener("click",function(){
   
    historyButton.classList.add("custom-outline2");
    historyButton.classList.remove("custom-outline","btn-outline");
    donationButton.classList.remove("custom-outline2");
    donationButton.classList.add("custom-outline","btn-outline");
   
})




