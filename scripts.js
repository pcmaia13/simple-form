document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("myForm");
    var submitButton = document.getElementById("botao");
  
    submitButton.addEventListener("click", function () {
      if (validateForm()) {
        alert("Formulario enviado com seucesso");
        form.submit(); 
      }
    });
  
    function validateForm() {
      var nome = document.getElementById("nome").value;
      var email = document.getElementById("email").value;
  
      if (nome.trim() === "") {
        alert("Por favor seu username.");
        return false;
      }
  
      if (email.trim() === "") {
        alert("Por favorm seu email");
        return false;
      }
  
  
      return true; 
    }
  });
  




   
     


 