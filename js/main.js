const isLogged = () => {
    let token = localStorage.getItem("token");
    token
      ? window.open("/views/home.html", "_self")
      : window.open("/views/login.html", "_self");
  };

  isLogged();
  
const loginEvent = document.querySelector("#loginBtn")


/* localStorage.setItem("token", token) */