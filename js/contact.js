document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const formResult = document.getElementById("formResult");
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
  
      const formData = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.web3forms.com/submit");
      xhr.setRequestHeader("Accept", "application/json");
  
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          const response = JSON.parse(xhr.responseText);
          if (xhr.status === 200) {
            formResult.innerHTML = response.message;
            formResult.classList.add("success");
            setTimeout(() => {
              form.reset(); // Reset the form after 3 seconds
            }, 3000);
          } else {
            formResult.innerHTML = response.message;
            formResult.classList.add("error");
          }
          setTimeout(() => {
            formResult.innerHTML = "";
            formResult.className = "";
          }, 3000);
        }
      };
  
      xhr.send(formData);
    });
  });
  