function common_id_function(id)
{
    let y_id= document.getElementById(id);
    return y_id;
}








function handleFormSubmit(event, modalId) {
  event.preventDefault(); // Prevent form from reloading the page
  const modal = document.getElementById(modalId);
  modal.close(); // Close the modal manually
}

  