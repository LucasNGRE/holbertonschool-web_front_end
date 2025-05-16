function setCookies() {
    const firstname = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;

    document.cookie = `firstname=${firstname}`;
    document.cookie = `email=${email}`;
  }
  
  function showCookies() {
    const cookies = document.cookie.split("; ");
    const myCookies = cookies.filter(cookie => 
      cookie.startsWith("firstname=") || cookie.startsWith("email=")
    );
  
    const p = document.createElement("p");
    p.innerHTML = `Cookies: ${myCookies.join("; ")}`;
    document.body.appendChild(p);
  }
  
  window.setCookies = setCookies;
  window.showCookies = showCookies;
  