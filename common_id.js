function common_id_function(id)
{
    let y_id= document.getElementById(id);
    return y_id;
}



const closeForm = document.getElementById("closeForm");

closeForm.addEventListener("submit", function(event) {
  event.preventDefault(); 
  const modal = document.getElementById("my_modal_1");
  modal.close(); // Close the modal
});

  