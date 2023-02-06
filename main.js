//Menu Hambúrguer
var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    } else {
        ul.classList.add('open');
    }
}

//cookies
if (!localStorage.getItem("cookiesAccepted")) { 
    var cookieMessage = document.getElementById('cookie-notification');  
    var closeCookie = document.getElementById('cookie-notification-close');
    
    cookieMessage.style.display = 'block';  
    closeCookie.addEventListener("click", function(e) {  
      e.preventDefault();
      localStorage.setItem("cookiesAccepted", true);
      
      cookieMessage.style.display = 'none';
    });
  }