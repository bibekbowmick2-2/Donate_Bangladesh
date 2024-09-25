// For card section
let total_money_id = document.getElementById("total_money_id");

let noakhali_input_id = document.getElementById("noakhali_input_id");
let feni_input_id = document.getElementById("feni_input_id");
let quota_input_id = document.getElementById("quota_input_id");

let noakhali_donate_button = document.getElementById("noakhali_donate_button");
let feni_donate_button = document.getElementById("feni_donate_button");
let quota_donate_button = document.getElementById("quota_donate_button");


let my_modal_1 = document.getElementById("my_modal_1");
let my_modal_2 = document.getElementById("my_modal_2");
let my_modal_3 = document.getElementById("my_modal_3");



let side_value1 = 0, side_value2 = 0, side_value3 = 0;

// For history section
let history_section = document.getElementById("history_section");
let all_card = document.getElementById("all_card");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");


// Common function to update total and specific card value
function handleDonation(inputField, currentSideValue, displayElementId, cardText,modal_id) {
    let value = parseFloat(inputField.value);
    if (isNaN(value) || value < 0) {
        modal_id.close();
        alert("Please enter a valid amount");
        money_id.innerText = currentSideValue;
        return;
    }

    else{
        modal_id.showModal();
        currentSideValue += value;
        let money_id = common_id_function(displayElementId);
        money_id.innerText = currentSideValue;
    
        // Update total money
        total_money_id.innerText = parseFloat(total_money_id.innerText) - value;
    
        // Append to history section(Common Function)
        appendHistory(currentSideValue, cardText);
    
        return currentSideValue;

    }

 
}




function handleFormSubmit(event, modalId) {
    event.preventDefault(); // Prevent form from reloading the page
    const modal = document.getElementById(modalId);
    modal.close(); // Close the modal manually
  }



// Function to append donation to the history section
function appendHistory(amount, cardText) {
    const currentDate = new Date();
    const formattedDate = currentDate.toString();

    const para = document.createElement("div");
    para.innerHTML = `
        <div tabindex="0" class="collapse collapse-open border-base-300 bg-slate-300 border mx-auto w-2/3 mt-4">
            <div class="collapse-title text-xl font-medium">
                ${amount} Taka is Donated for ${cardText}
            </div>
            <div class="collapse-content">
                <p class="custom-outline">Date: ${formattedDate}</p>
            </div>
        </div>
    `;

    history_section.appendChild(para);
}

// Event listeners for each donation button
noakhali_donate_button.addEventListener("click", function() {
    side_value1 = handleDonation(noakhali_input_id, side_value1, "noakhali_money_id", c1.innerText,my_modal_1);
});

feni_donate_button.addEventListener("click", function() {
    side_value2 = handleDonation(feni_input_id, side_value2, "feni_money_id", c2.innerText,my_modal_2);
});

quota_donate_button.addEventListener("click", function() {
    side_value3 = handleDonation(quota_input_id, side_value3, "quota_money_id", c3.innerText,my_modal_3);
});





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

















